// 1. create 2 boxes
// 2. create dropdown list
// 3. get the currency exchange rate
// 4. item changes when select the item from the dropdown list
// 5. get the currency exchange amount after inputting the amount
// 6. the amount is exchanged based on the item rate that selected from the list
// 7. put the currency name
// 8. works top to bottom and vise versa

let currencyRatio = {
  USD: {
    EUR: 0.93,
    GBP: 0.82,
    USD: 1,
    unit: "dollar",
  },

  EUR: {
    GBP: 0.88,
    USD: 1.07,
    EUR: 1,
    unit: "euro",
  },

  GBP: {
    USD: 1.22,
    EUR: 1.13,
    GBP: 1,
    unit: "pound",
  },
};

let fromCurrency = 'USD';
let toCurrency = 'USD';

// button action -> click event (for from currency)
document.querySelectorAll("#from-currency a").forEach((menu) => menu.addEventListener("click", function(){
    //1. get button
    //2. change button value
    document.getElementById("from-button").textContent=this.textContent;
    //3. store selected currency rate value to the variable
    fromCurrency = this.textContent;
    console.log("current currency is", fromCurrency);
}));

// button action -> click event (for to currency)
document.querySelectorAll("#to-currency a").forEach((menu) => menu.addEventListener("click", function(){
    //1. get button
    //2. change button value
    document.getElementById("to-button").textContent=this.textContent;
    //3. store selected currency rate value to the variable
    toCurrency = this.textContent;
    console.log("current currency is", toCurrency);
}));
