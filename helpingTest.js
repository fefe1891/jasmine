describe("Tip Pool App Tests ->", function() {
      beforeEach(function () {
            allPayments = {
                  payment1: {billAmt: '200', tipAmt: '30', tipPercent: '15'},
                  payment2: {billAmt: '150', tipAmt: '20', tipPercent: '13'}
            };
      });

      it ("should sum payment total correctly", function() {
            expect(sumPaymentTotal('billAmt')).toEqual(350);
            expect(sumPaymentTotal('tipAmt')).toEqual(50);
            expect(sumPaymentTotal('tipPercent')).toEqual(28);
      });

      it ("should calculate tip percent correctly", function() {
            expect(calculateTipPercent(200, 50)).toEqual(25);
            expect(calculateTipPercent(150, 30)).toEqual(20);
      });

      it ("should append a cell to a table row correctly", function() {
            let tr = document.createElement('tr');
            appendTd(tr, 'test');
            expect(tr.children.length).toEqual(1);
            expect(tr.firstChild.innerHTML).toEqual('test');
      });
});
  