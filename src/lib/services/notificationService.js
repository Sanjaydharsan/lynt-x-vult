import { PrismaClient } from '@/generated/prisma';
const prisma = new PrismaClient();

export const createNotification = async ({
  organizationId,
  userId,
  role,
  message,
  url,
  type,
}) => {
  try {
    const notification = await prisma.notification.create({
      data: {
        organizationId,
        userId,
        role,
        message,
        url,
        type,
      },
    });
    return { success: true, data: notification };
  } catch (error) {
    console.error('Error creating notification:', error);
    return { success: false, error: 'Failed to create notification' };
  }
};

export const getNotificationsByOrganization = async (organizationId) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: notifications };
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return { success: false, error: 'Failed to fetch notifications' };
  }
};

export const markNotificationAsRead = async (notificationId, organizationId) => {
  try {
    const notification = await prisma.notification.findFirst({
      where: { id: notificationId, organizationId },
    });
    if (!notification) {
      return { success: false, error: 'Notification not found or unauthorized' };
    }
    const updatedNotification = await prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true },
    });
    return { success: true, data: updatedNotification };
  } catch (error) {
    console.error('Error marking notification as read:', error);
    return { success: false, error: 'Failed to mark notification as read' };
  }
};