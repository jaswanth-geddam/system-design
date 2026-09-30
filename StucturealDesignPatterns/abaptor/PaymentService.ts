// interface PaymentService {
// pay(amount: number): void;
// }

// class Razorpay {
// makePayment(amount: number): void {
// console.log(`Razorpay payment successful: ₹${amount}`);
// }
// }

// class PayPal {
// processPayment(amount: number): void {
// console.log(`PayPal payment successful: $${amount}`);
// }
// }

// class RazorpayAdapter implements PaymentService {
// private razorpay: Razorpay; 
// constructor(razorpay: Razorpay) {
// this.razorpay = razorpay;
// }   
// pay(amount: number): void {
// this.razorpay.makePayment(amount);
// }
// }

// class PayPalAdapter implements PaymentService {
// private payPal: PayPal;

// constructor(payPal: PayPal) {
// this.payPal = payPal;
// }

// pay(amount: number): void {
// this.payPal.processPayment(amount);
// }
// }
// const razorpayPayment: PaymentService =
//   new RazorpayAdapter(new Razorpay());
// razorpayPayment.pay(500);

// const payPalPayment: PaymentService =
//   new PayPalAdapter(new PayPal());
// payPalPayment.pay(25);








interface PaymentService{
     pay(amount:number,id:number):void ;
}

class Razorpay {
    makePayment(amount:number,id:number):void{
      console.log(`Razorpay payment successful: ₹${amount}`);
    }
}
class Paypal {
    doPayment(amount:number,id:number):void{
      console.log(`Paypal payment successful: $${amount}`);
    }
}

class RazorpayAdapter implements PaymentService{
    public razorpay:Razorpay
    constructor(razorpay:Razorpay){
        this.razorpay=razorpay;
    }
    pay(amount:number,id:number):void{
        this.razorpay.makePayment(amount,id);
    }
}
class PaypalAdapter implements PaymentService{
    public paypal:Paypal
    constructor(paypal:Paypal){
        this.paypal=paypal;
    }
    pay(amount:number,id:number):void{
        this.paypal.doPayment(amount,id);
    }
}

let razorpayPayment:PaymentService=new RazorpayAdapter(new Razorpay());
razorpayPayment.pay(500,1);
let paypalPayment:PaymentService=new PaypalAdapter(new Paypal());
paypalPayment.pay(25,2);