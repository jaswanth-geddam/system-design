import { EmailNotification, SMSNotification } from "./FactoryMethodInterfaces.js";
import type { Notification } from "./FactoryMethodInterfaces.js";
import {
  EmailNotificationTemplate,
  SMSNotificationTemplate,
} from "./AbstractFactoryInterfaces.js";
import type { NotificationTemplate } from "./AbstractFactoryInterfaces.js";

interface NotificationFactory {
  createNotification(): Notification;
  createTemplate(): NotificationTemplate;
}

class EmailNotificationFactory implements NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }

  createTemplate(): NotificationTemplate {
    return new EmailNotificationTemplate();
  }
}

class SMSNotificationFactory implements NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }

  createTemplate(): NotificationTemplate {
    return new SMSNotificationTemplate();
  }
}

function sendNotification(factory: NotificationFactory, message: string): void {
  const notification = factory.createNotification();
  const template = factory.createTemplate();
  notification.send(template.format(message));
}

// Usage
sendNotification(new SMSNotificationFactory(), "Hello from Abstract Factory");