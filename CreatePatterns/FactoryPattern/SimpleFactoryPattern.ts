interface NotificationMessage {
  send(msg: string): void;
}

class EmailNotification implements NotificationMessage {
  send(msg: string): void {
    console.log(`Email: ${msg}`);
  }
}

class SMSNotification implements NotificationMessage {
  send(msg: string): void {
    console.log(`SMS: ${msg}`);
  }
}

class NotificationFactory {
  static create(type: string): NotificationMessage {
    if (type === "email") {
      return new EmailNotification();
    }
    return new SMSNotification();
  }
}

// Usage
const notification = NotificationFactory.create("email");
notification.send("Hello");





