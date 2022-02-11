// (1) What are the two disadvantages of working with factory functions?

1. All objects created from factory functions have a copy of all the properties and methods that the returned object has -- leads to redundancy
2. We have no way of identifying an object's type -- we cannot test if an object came from a particular object factory function

// (2) Rewrite the code below to use object-literal syntax to generate the returned object:

function makeObj() {
  let obj = {};
  obj.propA = 10;
  obj.propB = 20;
  return obj;
}

function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}

// (3) In the following problems, we'll be working through an invoice processing program. To get you started, we provide you with the following code that can process one invoice:

let invoice = {
  phone: 3000,
  internet: 6500, 
};

let payment = {
  phone: 1300,
  internet: 5500,
};

let invoiceTotal = invoice.phone + invoice.internet;
let paymentTotal = payment.phone + payment.internet;
let remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal); // 6800
console.log(remainingDue); // 2700

///

function createPayment(services) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      return this.amount || (this.phone + this.internet);
    },
  };
}

function paymentTotal(payments) {
  let total = 0;
  
  payments.forEach(payment => {
    total += payment.total();
  });

  return total;
}

let payments = [];
payments.push(createPayment());

payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments)); // 24000

function createInvoice(services) {
  services = services || {};
  let invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
  };

  invoice.total = function() {
    return invoice.phone + invoice.internet;
  };

  invoice.addPayment = function(payment) {
    invoice.payments.push(payment);
  };

  invoice.addPayments = function(payment) {
    payments.forEach(payment => {
      invoice.addPayment(payment);
    });
  };

  invoice.paymentTotal = function() {
    let totalPaid = 0;

    
  }
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total() {
      return (this.phone + this.internet);
    }
  }
}

function invoiceTotal(invoices) {
  let total = 0;
  invoices.forEach(invoice => {
    total += invoice.total();
  });

  return total;
}

let invoices = [];

invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({ phone: 1000, internet: 4500 }));

console.log(invoiceTotal(invoices)); // 31000
