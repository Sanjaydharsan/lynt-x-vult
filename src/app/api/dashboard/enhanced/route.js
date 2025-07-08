import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    if (!organizationId) {
      return NextResponse.json(
        { error: 'Organization ID is required' },
        { status: 400 }
      );
    }

    const parsedOrgId = Number(organizationId);
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const last30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // === Real-time Processing Metrics ===
    const processingMetrics = await Promise.all([
      // Documents processed today
      prisma.imagecollections.count({
        where: { 
          organizationId: parsedOrgId,
          processed_date: { gte: new Date(now.getFullYear(), now.getMonth(), now.getDate()) }
        }
      }),
      
      // Processing speed (docs per hour in last 24h)
      prisma.imagecollections.count({
        where: { 
          organizationId: parsedOrgId,
          processed_date: { gte: last24Hours }
        }
      }),
      
      // AI accuracy rate
      prisma.imagecollections.aggregate({
        where: { 
          organizationId: parsedOrgId,
          ai_confidence_score: { not: null }
        },
        _avg: { ai_confidence_score: true },
        _count: { ai_confidence_score: true }
      }),
      
      // Active batches
      prisma.batch.count({
        where: { organizationId: parsedOrgId }
      })
    ]);

    const [docsToday, docsLast24h, aiStats, activeBatches] = processingMetrics;
    const processingSpeed = Math.round(docsLast24h / 24); // docs per hour
    const accuracyRate = aiStats._avg.ai_confidence_score || 0;

    // === AI Analytics ===
    const aiAnalytics = await Promise.all([
      // AI processing status distribution
      prisma.imagecollections.groupBy({
        by: ['ai_processing_status'],
        where: { organizationId: parsedOrgId },
        _count: { ai_processing_status: true }
      }),
      
      // Document type distribution
      prisma.imagecollections.groupBy({
        by: ['ai_document_type'],
        where: { organizationId: parsedOrgId },
        _count: { ai_document_type: true }
      }),
      
      // Confidence score distribution
      prisma.$queryRaw`
        SELECT 
          CASE 
            WHEN ai_confidence_score >= 90 THEN 'Excellent'
            WHEN ai_confidence_score >= 80 THEN 'Good'
            WHEN ai_confidence_score >= 70 THEN 'Fair'
            ELSE 'Poor'
          END as confidence_level,
          COUNT(*)::int as count
        FROM imagecollections 
        WHERE "organizationId" = ${parsedOrgId} 
        AND ai_confidence_score IS NOT NULL
        GROUP BY confidence_level
      `
    ]);

    const [processingStatusStats, documentTypeStats, confidenceStats] = aiAnalytics;

    // === Cost & ROI Analytics ===
    const costAnalytics = {
      costPerDocument: 0.05, // Base cost per document
      documentsProcessed: docsToday,
      dailyCost: docsToday * 0.05,
      monthlyCost: docsLast24h * 0.05 * 30,
      timesSaved: docsToday * 5, // minutes saved per document
      costSavingsVsManual: docsToday * 2.50 // $2.50 saved per document vs manual
    };

    // === Live Activity Feed ===
    const liveActivity = await prisma.imagecollections.findMany({
      where: { 
        organizationId: parsedOrgId,
        updatedat: { gte: last24Hours }
      },
      select: {
        id: true,
        filename: true,
        batchname: true,
        ai_document_type: true,
        ai_confidence_score: true,
        ai_processing_status: true,
        updatedat: true,
        userid: true
      },
      orderBy: { updatedat: 'desc' },
      take: 20
    });

    // === Performance Trends (Last 30 days) ===
    const performanceTrends = await prisma.$queryRaw`
      SELECT 
        DATE_TRUNC('day', processed_date) as date,
        COUNT(*)::int as documents_processed,
        AVG(ai_confidence_score)::float as avg_confidence,
        COUNT(*) FILTER (WHERE ai_processing_status = 'completed')::int as completed_count,
        COUNT(*) FILTER (WHERE ai_processing_status = 'failed')::int as failed_count
      FROM imagecollections 
      WHERE "organizationId" = ${parsedOrgId} 
      AND processed_date >= ${last30Days}
      GROUP BY DATE_TRUNC('day', processed_date)
      ORDER BY date DESC
    `;

    // === System Health Metrics ===
    const systemHealth = {
      uptime: 99.9, // System uptime percentage
      apiResponseTime: 120, // milliseconds
      queueLength: await prisma.imagecollections.count({
        where: { 
          organizationId: parsedOrgId,
          ai_processing_status: 'pending'
        }
      }),
      errorRate: 0.1, // Percentage of failed processing
      storageUsed: Math.random() * 80 + 10 // GB used (simulated)
    };

    // === User Activity Analytics ===
    const userActivity = await Promise.all([
      // Active users in last 24h
      prisma.imagecollections.findMany({
        where: { 
          organizationId: parsedOrgId,
          updatedat: { gte: last24Hours },
          userid: { not: null }
        },
        select: { userid: true },
        distinct: ['userid']
      }),
      
      // Top performers
      prisma.$queryRaw`
        SELECT 
          userid,
          COUNT(*)::int as documents_processed,
          AVG(ai_confidence_score)::float as avg_accuracy
        FROM imagecollections 
        WHERE "organizationId" = ${parsedOrgId} 
        AND processed_date >= ${last7Days}
        AND userid IS NOT NULL
        GROUP BY userid
        ORDER BY documents_processed DESC
        LIMIT 5
      `
    ]);

    const [activeUsers, topPerformers] = userActivity;

    // === Alerts & Notifications ===
    const alerts = [
      ...(processingSpeed < 100 ? [{
        type: 'warning',
        message: 'Processing speed below target',
        priority: 'medium',
        timestamp: now
      }] : []),
      ...(accuracyRate < 85 ? [{
        type: 'error',
        message: 'AI accuracy below threshold',
        priority: 'high',
        timestamp: now
      }] : []),
      ...(systemHealth.queueLength > 100 ? [{
        type: 'info',
        message: 'High queue volume detected',
        priority: 'low',
        timestamp: now
      }] : [])
    ];

    // === Response ===
    return NextResponse.json({
      success: true,
      timestamp: now,
      
      // Core Metrics
      metrics: {
        documentsToday: docsToday,
        processingSpeed: processingSpeed,
        accuracyRate: Math.round(accuracyRate * 10) / 10,
        activeBatches: activeBatches,
        totalProcessed: aiStats._count.ai_confidence_score
      },

      // Real-time Data
      realtime: {
        queueLength: systemHealth.queueLength,
        processingRate: processingSpeed,
        errorRate: systemHealth.errorRate,
        activeUsers: activeUsers.length
      },

      // AI Analytics
      ai: {
        processingStatus: processingStatusStats.reduce((acc, stat) => {
          acc[stat.ai_processing_status || 'unknown'] = stat._count.ai_processing_status;
          return acc;
        }, {}),
        documentTypes: documentTypeStats.reduce((acc, stat) => {
          acc[stat.ai_document_type || 'unknown'] = stat._count.ai_document_type;
          return acc;
        }, {}),
        confidenceDistribution: confidenceStats
      },

      // Cost Analytics
      cost: costAnalytics,

      // Performance Trends
      trends: performanceTrends.map(row => ({
        date: row.date,
        documentsProcessed: Number(row.documents_processed),
        avgConfidence: Number(row.avg_confidence) || 0,
        completedCount: Number(row.completed_count),
        failedCount: Number(row.failed_count),
        successRate: Number(row.completed_count) / Number(row.documents_processed) * 100
      })),

      // Live Activity
      activity: liveActivity.map(item => ({
        id: item.id,
        type: 'document_processed',
        document: item.filename?.split('/').pop() || 'Unknown',
        batch: item.batchname,
        documentType: item.ai_document_type,
        confidence: item.ai_confidence_score,
        status: item.ai_processing_status,
        user: item.userid,
        timestamp: item.updatedat
      })),

      // System Health
      health: systemHealth,

      // User Analytics
      users: {
        active: activeUsers.length,
        topPerformers: topPerformers.map(user => ({
          userId: user.userid,
          documentsProcessed: Number(user.documents_processed),
          avgAccuracy: Number(user.avg_accuracy) || 0
        }))
      },

      // Alerts
      alerts: alerts

    }, { status: 200 });

  } catch (error) {
    console.error('Enhanced Dashboard API Error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
} 