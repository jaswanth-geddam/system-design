"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotification = exports.EmailNotification = void 0;
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.send = function (message) {
        console.log("Email: ".concat(message));
    };
    return EmailNotification;
}());
exports.EmailNotification = EmailNotification;
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.send = function (message) {
        console.log("SMS: ".concat(message));
    };
    return SMSNotification;
}());
exports.SMSNotification = SMSNotification;
