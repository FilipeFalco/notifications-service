import { Content } from './contents';
import { Notification } from './notifications';

describe('Notification', () => {
  it('should be able to create a notification', async () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: '123456',
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });
});
