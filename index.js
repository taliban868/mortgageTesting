function clearAll() {
  document.querySelector('body')
   .innerHTML = `
   <div class="main-container">
    <div class="left-section">
      <div class="inner-top-left">
        <h3>Mortgage Calculator</h3>
        <a href="#" class="clear-all" onclick="clearAll()">Clear All</a>
        
        
      </div>

      <form>
        <div class="form-group">
          <label>Mortgage Amount</label>
          <div class="mortgage-amount">
            <label class="text-amount">£</label>
            <input type="number" class="input-amount inputss" required>
           
          </div>
          
        </div>
        <div class="flex">
          <div class="form-left">
            <label>Mortgage Term</label>
            <div class="mortgage-term">
              <input type="number"  required>
             <label class="text-term inputss">years</label>
            </div>
            
          </div>
          <div class="form-right">
            <label>Interest Rate</label>
            <div class="interest-rate">
              <input type="number"  required>
             <label class="text-rate inputss">%</label>
            </div>
            
          </div>
        </div>
        
      </form>
      
      <div class="type">
        <legend>Mortgage Type</legend>
        
          <input type="radio" name="type" id="rp">
          <label for="rp" class="labels">Repayment </label>
       
        
          <input type="radio" name="type" id="io">
          <label for="io" class="labels">Interest Only </label>
       
  
        <button class="button" onclick="showResults()">
          <img src="icon-calculator.svg" alt="" srcset="">
          <p>Calculate Repayments</p>
        </button>
      </div>

      
    </div>


    <div class="right-section-empty js-results">
      <div class="empty">

        <img src="illustration-empty.svg" alt="">
        <h2 class="results-shown">Results shown here</h2>
        <p class="empty-text">
          Complete the form and click “calculate repayments” to see what 
          your monthly repayments would be.
        </p>
      </div>
      

    </div>
  </div>
   `;
}



function calculate() {
  
}

function showResults() {
  const mortgageAmount = document.getElementById('amount').value;
  const mortgageTerm = document.getElementById('term').value;
  const interestRate = document.getElementById('rate').value;


    let monthlyInterestRate = (interestRate / 100) / 12;
    // Calculate total number of monthly payments
    let numberOfPayments = mortgageTerm * 12;
    // Calculate the monthly payment using the formula
    let monthlyPayment = mortgageAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    let totalRepayAmount = (monthlyPayment.toFixed(2)) * numberOfPayments;
    console.log(totalRepayAmount);
    console.log(monthlyPayment);

  document.querySelector('.js-results')
    .innerHTML =`
    <div class="right-section-completed">
  <h3 class="complete-results">Your results</h3>
  <p class="complete-text">
    Your results are shown below based on the information you provided. 
    To adjust the results, edit the form and click “calculate repayments” again.
  </p>
  <div class="results-card">
    <div class="top-card">
      <p class="repayments">
        Your monthly repayments
      </p>
      <h1 class="repayment-amount">
        $${monthlyPayment.toFixed(2)}
      </h1>
    </div>
    <div class="bottom-card">
      <p class="total-repay">
        Total you'll repay over the term
      </p>
      <h2 class="total-repay-amount">
        $${totalRepayAmount.toFixed(2)}
      </h2>
    </div>
  </div>
</div>
    `;
    
}

