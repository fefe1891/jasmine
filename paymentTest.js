describe("payments tests", function() {
      beforeEach(function() {
            billAmtInput.value = '';
            tipAmtInput.value = '';
            allPayments = {};
            paymentId = 0;
            paymentTbody.innerHTML = '';

      });

it("should add a new payment on submitPaymentInfo()", function() {
      //set up
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      //call function under test
      submitPaymentInfo();
      //check result
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('100');
      expect(allPayments['payment1'].tipAmt).toEqual('20');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
});

it("should not add a new payment on submitPaymentInfo() when inputs are empty", function() {
      //set up
      billAmtInput.value = '';
      tipAmtInput.value = '';

      //call function under test
      submitPaymentInfo();

      //check result
      expect(Object.keys(allPayments).length).toEqual(0);
}); 

it("should create a new payment Object when createCurPayment() is called", function() {
      //set input values
      billAmtInput.value = '120';
      tipAmtInput.value = '20';

      //call createCurPayment function
      let curPayment = createCurPayment();

      //checking if properties are defined and correct
      expect(curPayment.billAmt).toEqual('120');
      expect(curPayment.tipAmt).toEqual('20');
      expect(curPayment.tipPercent).toEqual(calculateTipPercent('120', '20'));
});

it("should append a new payment data on appendPaymentTable()", function() {
      //create a current payment object
      let curPayment = {billAmt: '150',tipAmt: '30', tipPercent:  ('150', '30')};

      //call appendPaymentTable function
      appendPaymentTable(curPayment);

      //check if table row was added
      let row = paymentTbody.querySelector('tr');
      expect(row).toBeDefined();

      //check cell values
      let cells = row.querySelectorAll('td');
      expect(cells[0].innerText).toEqual('$' + curPayment.billAmt);
      expect(cells[1].innerText).toEqual('$' + curPayment.tipAmt);
      expect(cells[2].innerText).toEqual(curPayment.tipPercent + '%');
});

it("should update and display summary on updateSummary()", function() {
      allPayments = {
            'payment1' : {billAmt: '200', tipAmt: '40', tipPercent: calculateTipPercent('200', '40')}, 'payment2' : {billAmt: '100', tipAmt: '15', tipPercent: calculateTipPercent('100', '15')}
      };

      //calling updateSummary function
      updateSummary();

      //check if summary was updated correctly
      expect(summaryTds[0].innerHTML).toEqual('$' + sumPaymentTotal('billAmt'));
      expect(summaryTds[1].innerHTML).toEqual('$' + sumPaymentTotal('tipAmt'));
      expect(summaryTds[2].innerHTML).toEqual(Math.round((sumPaymentTotal('tipPercent') / Object.keys(allPayments).length)) + '%');
});

describe('appendDeleteBtn function', function() {
      beforeEach(function() {
            paymentTbody.innerHTML = ''; //clear the payment table body
      });

      it ('should appendDeleteBtn to the provided table row', function() {
            //creates a new tr element
            let tr = document.createElement('tr');
            //append tr to the payment table
            paymentTbody.append(tr);
            //call function to test
            appendDeleteBtn(tr);

            let deleteButton = tr.querySelector('button');

            expect(deleteButton).not.toBeNull();
            expect(deleteButton.innerText).toEqual('X');
      });

//teardown for each test function
afterEach(function() {
      //cleanup: reset state
      billAmtInput.value = '';
      tipAmtInput.value = '';
      allPayments = {};
      paymentId = 0
      paymentTbody.innerHTML = '';
      summaryTds.forEach(td => { td.innerHTML = '';
});
});
});
});