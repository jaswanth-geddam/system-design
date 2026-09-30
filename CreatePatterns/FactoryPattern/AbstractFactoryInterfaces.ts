export interface NotificationTemplate {
  format(message: string): string;
}

export class EmailNotificationTemplate implements NotificationTemplate {
  format(message: string): string {
    return `Email template: ${message}`;
  }
}

export class SMSNotificationTemplate implements NotificationTemplate {
  format(message: string): string {
    return `SMS template: ${message}`;
  }
}