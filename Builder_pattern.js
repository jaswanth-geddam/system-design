"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingBuilder = exports.userBuilder = void 0;
//learning builder pattern basic example
var user = /** @class */ (function () {
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    return user;
}());
var userBuilder = /** @class */ (function () {
    function userBuilder() {
    }
    userBuilder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    userBuilder.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    userBuilder.prototype.setAge = function (age) {
        this.age = age;
        return this;
    };
    userBuilder.prototype.build = function () {
        return new user(this.name, this.email, this.age);
    };
    return userBuilder;
}());
exports.userBuilder = userBuilder;
var user1 = new userBuilder()
    .setName("John Doe")
    .setEmail("john.doe@example.com")
    .build();
console.log(user1);
// learning builder pattern advance example
var Booking = /** @class */ (function () {
    function Booking(userId, courtId, date, startTime, endTime, players, paymentStatus, notes) {
        this.userId = userId;
        this.courtId = courtId;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.players = players;
        this.paymentStatus = paymentStatus;
        this.notes = notes;
    }
    return Booking;
}());
var BookingBuilder = /** @class */ (function () {
    function BookingBuilder() {
    }
    BookingBuilder.prototype.setUserID = function (userID) {
        this.userId = userID;
        return this;
    };
    BookingBuilder.prototype.setCourtId = function (courtId) {
        this.courtId = courtId;
        return this;
    };
    BookingBuilder.prototype.setDate = function (date) {
        this.date = date;
        return this;
    };
    BookingBuilder.prototype.setStartTime = function (startTime) {
        this.startTime = startTime;
        return this;
    };
    BookingBuilder.prototype.setEndTime = function (endTime) {
        this.endTime = endTime;
        return this;
    };
    BookingBuilder.prototype.setPlayers = function (players) {
        this.players = players;
        return this;
    };
    BookingBuilder.prototype.setPaymentStatus = function (paymentStatus) {
        this.paymentStatus = paymentStatus;
        return this;
    };
    BookingBuilder.prototype.setNotes = function (notes) {
        this.notes = notes;
        return this;
    };
    BookingBuilder.prototype.build = function () {
        if (!this.userId) {
            throw new Error("User ID is required");
        }
        return new Booking(this.userId, this.courtId, this.date, this.startTime, this.endTime, this.players, this.paymentStatus, this.notes);
    };
    return BookingBuilder;
}());
exports.BookingBuilder = BookingBuilder;
var booking = new BookingBuilder()
    .setCourtId("C10")
    .setDate("2026-09-25")
    .setStartTime("18:00")
    .setEndTime("19:00")
    .setPlayers(4)
    .setPaymentStatus("PAID")
    .setNotes("Need extra racket")
    .build();
console.log(booking);
// assigment
