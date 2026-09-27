"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FactoryMethodInterfaces_js_1 = require("./FactoryMethodInterfaces.js");
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.prototype.notify = function (message) {
        var notification = this.createNotification();
        notification.send(message);
    };
    return NotificationFactory;
}());
var EmailNotificationFactory = /** @class */ (function (_super) {
    __extends(EmailNotificationFactory, _super);
    function EmailNotificationFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailNotificationFactory.prototype.createNotification = function () {
        return new FactoryMethodInterfaces_js_1.EmailNotification();
    };
    return EmailNotificationFactory;
}(NotificationFactory));
var SMSNotificationFactory = /** @class */ (function (_super) {
    __extends(SMSNotificationFactory, _super);
    function SMSNotificationFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSNotificationFactory.prototype.createNotification = function () {
        return new FactoryMethodInterfaces_js_1.SMSNotification();
    };
    return SMSNotificationFactory;
}(NotificationFactory));
// Usage
var factory = new SMSNotificationFactory();
factory.notify("Hello from Factory Method");
