var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.send = function (msg) {
        console.log("Email: ".concat(msg));
    };
    return EmailNotification;
}());
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.send = function (msg) {
        console.log("SMS: ".concat(msg));
    };
    return SMSNotification;
}());
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.create = function (type) {
        if (type === "email") {
            return new EmailNotification();
        }
        return new SMSNotification();
    };
    return NotificationFactory;
}());
// Usage
var notification = NotificationFactory.create("email");
notification.send("Hello");
