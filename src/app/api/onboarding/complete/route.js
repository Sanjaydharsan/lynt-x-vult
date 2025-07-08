import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    const userId = request.headers.get('x-user-id');
    
    const formData = await request.json();
    
    // Save organization preferences
    await prisma.organization.update({
      where: { id: parseInt(organizationId) },
      data: {
        name: formData.organization.name || 'Lynt-X Labs'
      }
    });

    // Create templates based on selections
    for (const templateId of formData.templates) {
      const templateData = getTemplateData(templateId);
      if (templateData) {
        await prisma.template.upsert({
          where: { 
            id: templateData.id
          },
          update: {
            isActive: true
          },
          create: {
            ...templateData,
            organizationId: parseInt(organizationId)
          }
        });
      }
    }

    // Save user preferences in localStorage-like storage
    const preferences = {
      outputFormats: formData.outputs,
      dataSources: formData.dataSources,
      processing: formData.processing,
      onboardingComplete: true,
      completedAt: new Date()
    };

    // Store preferences (could be in a separate preferences table)
    console.log('Onboarding completed for organization:', organizationId);
    console.log('Preferences:', preferences);

    return NextResponse.json({
      success: true,
      message: 'Onboarding completed successfully',
      preferences
    });

  } catch (error) {
    console.error('Onboarding completion error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

function getTemplateData(templateId) {
  const templates = {
    'invoice': {
      id: 32,
      name: 'Standard Invoice',
      isActive: true,
      isDelete: false
    },
    'purchase_order': {
      id: 33,
      name: 'Purchase Order',
      isActive: true,
      isDelete: false
    },
    'contract': {
      id: 34,
      name: 'Legal Contract',
      isActive: true,
      isDelete: false
    },
    'receipt': {
      id: 35,
      name: 'Expense Receipt',
      isActive: true,
      isDelete: false
    },
    'tax_form': {
      id: 36,
      name: 'Tax Form',
      isActive: true,
      isDelete: false
    },
    'insurance': {
      id: 37,
      name: 'Insurance Claim',
      isActive: true,
      isDelete: false
    }
  };
  
  return templates[templateId];
} 