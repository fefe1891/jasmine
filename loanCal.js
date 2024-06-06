window.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById("calc-form");
      if (form) {
          setupIntialValues();
          form.addEventListener("submit", function(e) {
              e.preventDefault();
              update();
          });
      }
  });
  
  function getCurrentUIValues() {
      return {
          amount: +(document.getElementById("loan-amount").value),
          years: +(document.getElementById("loan-years").value),
          rate: +(document.getElementById("loan-rate").value),
      }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
      const loanAmountInput = document.getElementById("loan-a-amount");
      const loanYearsInput = document.getElementById("loan-a-years");
      const loanRateInput = document.getElementById("loan-rate"); //setting up default val from UI. It then does all the
      //calculating and updates payment in UI.
      document.getElementById("loan-amount").value = "";
      document.getElementById("loan-years").value = "";
      document.getElementById("loan-rate").value = "";
      update();//perform the calculation once defaults are in place
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
      const currentUIValues = getCurrentUIValues();
      if (currentUIValues.amount && currentUIValues.years && currentUIValues.rate) {
          const monthlyPayment = calculateMonthlyPayment(currentUIValues); //calculate monthly payment
          const monthlyPaymentElement = document.getElementById("monthly-payment");//update monthly payment
          monthlyPaymentElement.innerText = `$${monthlyPayment}`;
      }
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
      const p = values.amount;
      const i = (values.rate/ 100) / 12;
      const n = values.years * 12;
      let monthlyPayment = (p * i) / (1 - Math.pow((1 + i), -n));
      return monthlyPayment.toFixed(2);
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
      const monthlyPaymentElement = document.getElementById("monthly-payment");
      monthlyPaymentElement.innerText = `$${monthly}`;//update the monthly payment
  }