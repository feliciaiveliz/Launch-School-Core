// use closures to control access to applications data

// let account = {
//   balance: 0,
//   transactions: [],

//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push({type: "deposit", amount: amount});
//     return amount;
//   },

//   withdraw(amount) {
//     if (this.balance < amount) {
//       amount = this.balance;
//     }

//     this.balance -= amount;
//     this.transactions.push({type: "withdrawl", amount: amount});
//     return amount;
//   },
// };

function makeBank() {
  let accounts = 0;
  function makeAccount(number) {
    let balance = 0;
    let transactions = [];
  
    return {
      deposit(amount) {
        balance += amount;
        transactions.push({type: "deposit", amount: amount});
        return amount;
      },
  
      withdraw(amount) {
        if (balance < amount) {
          amount = balance;
        }
  
        balance -= amount;
        transactions.push({type: "withdrawl", amount: amount});
        return amount;
      },
  
      number() {
        return number;
      },
  
      balance() {
        return balance;
      },
  
      transactions() {
        return transactions;
      }
    };
  }
  return {
    openAccount() {
      let number = accounts.length + 101;
      let newAccount = makeAccount(number);
      accounts.push(newAccount);
      return newAccount;
    },

    transfer(from, to) {
      return destination.deposit(source.withdraw(amount));
    }
  };
}

let bank = makeBank();
let account = bank.openAccount();
console.log(bank.accounts);
console.log(account.balance()); // 0
account.deposit(17); // 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number()); // 102
console.log(account.transactions()); // [Object]