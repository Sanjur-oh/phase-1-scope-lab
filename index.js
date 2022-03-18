// Write your solution in this file!
 var customerName = 'bob'; 

 function upperCaseCustomerName(){
     customerName = customerName.toUpperCase();
     return customerName;

 }

 function setBestCustomer(){ 
     bestCustomer = 'not bob';

 }

 function overwriteBestCustomer(){
     bestCustomer = 'maybe bob';
 }

const LeastFavoriteCustomer = 'mike';
function changeLeastFavoriteCustomer(){
    LeastFavoriteCustomer = 'mike';

}



//   describe('changeLeastFavoriteCustomer()', function() {
//     it('unsuccessfully tries to reassign the least favorite customer', function() {
//       expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
//     });
//   });
// });
