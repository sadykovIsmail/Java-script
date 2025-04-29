class BankAccount {
    constructor() {
      this.balance = 0;
      this.transactions = [];
    }
  
    deposit(amount) {
      if (amount <= 0) {
        alert("Deposit amount must be greater than zero.");
        return;
      }
      this.balance += amount;
      this.transactions.push({ type: "deposit", amount: amount });
      this.updateDisplay();
    }
  
    withdraw(amount) {
      if (amount <= 0 || amount > this.balance) {
        alert("Insufficient balance or invalid amount.");
        return;
      }
      this.balance -= amount;
      this.transactions.push({ type: "withdraw", amount: amount });
      this.updateDisplay();
    }
  
    listAllDeposits() {
      const deposits = this.transactions
        .filter(t => t.type === "deposit")
        .map(t => t.amount);
      return deposits.length > 0 ? deposits.join(",") : "None";
    }
  
    listAllWithdrawals() {
      const withdrawals = this.transactions
        .filter(t => t.type === "withdraw")
        .map(t => t.amount);
      return withdrawals.length > 0 ? withdrawals.join(",") : "None";
    }
  
    updateDisplay() {
      document.getElementById("balance").textContent = `Current Balance: $${this.balance}`;
      document.getElementById("deposits").textContent = `Deposits: ${this.listAllDeposits()}`;
      document.getElementById("withdrawals").textContent = `Withdrawals: ${this.listAllWithdrawals()}`;
    }
  }
  
  // Setup
  const myAccount = new BankAccount();
  
  const depositBtn = document.getElementById("depositBtn");
  const withdrawBtn = document.getElementById("withdrawBtn");
  const amountInput = document.getElementById("amount");
  
  depositBtn.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
      myAccount.deposit(amount);
      amountInput.value = "";
    }
  });
  
  withdrawBtn.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
      myAccount.withdraw(amount);
      amountInput.value = "";
    }
  });
  