import { EmailNotification, SMSNotification } from "./FactoryMethodInterfaces.js";
import type { Notification } from "./FactoryMethodInterfaces.js";

abstract class NotificationFactory {
  abstract createNotification(): Notification;

  notify(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

class SMSNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }
}

// Usage
const factory: NotificationFactory = new SMSNotificationFactory();
factory.notify("Hello from Factory Method");