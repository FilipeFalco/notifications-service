import { Content } from './contents';

describe('Notification Content', () => {
  it('should be able to create a notification content', async () => {
    const content = new Content('Você recebeu uma solicção de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content w less than 5 characters', async () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', async () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
