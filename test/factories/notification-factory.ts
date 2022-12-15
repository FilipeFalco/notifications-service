import { Content } from '@application/entities/contents';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notifications';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    category: 'social',
    content: new Content('This is a notification'),
    recipientId: 'recipient-2',
    ...override,
  });
}
