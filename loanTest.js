describe ('calculator tests', function() {
      it('should calculate the monthly rate correctly', function () {
          const values = {
              amount: 10000, years: 8, rate: 1.5
          };
          expect(calculateMonthlyPayment(values)).toEqual('110.61');
      });
  
      it("should return a result with 2 decimal places", function() {
          const values = {
              amount: 10000, years: 8, rate: 1.5
          };
          const result = calculateMonthlyPayment(values);
          const decimalPlace = result.split('.')[1].length;
          expect(decimalPlace).toEqual(2);
      });
  
  });