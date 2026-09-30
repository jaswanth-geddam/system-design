// interface PaymentService {
// pay(amount: number): void;
// }
var Razorpay = /** @class */ (function () {
    function Razorpay() {
    }
    Razorpay.prototype.makePayment = function (amount, id) {
        console.log("Razorpay payment successful: \u20B9".concat(amount));
    };
    return Razorpay;
}());
var Paypal = /** @class */ (function () {
    function Paypal() {
    }
    Paypal.prototype.doPayment = function (amount, id) {
        console.log("Paypal payment successful: $".concat(amount));
    };
    return Paypal;
}());
var RazorpayAdapter = /** @class */ (function () {
    function RazorpayAdapter(razorpay) {
        this.razorpay = razorpay;
    }
    RazorpayAdapter.prototype.pay = function (amount, id) {
        this.razorpay.makePayment(amount, id);
    };
    return RazorpayAdapter;
}());
var PaypalAdapter = /** @class */ (function () {
    function PaypalAdapter(paypal) {
        this.paypal = paypal;
    }
    PaypalAdapter.prototype.pay = function (amount, id) {
        this.paypal.doPayment(amount, id);
    };
    return PaypalAdapter;
}());
var razorpayPayment = new RazorpayAdapter(new Razorpay());
razorpayPayment.pay(500, 1);
var paypalPayment = new PaypalAdapter(new Paypal());
paypalPayment.pay(25, 2);
