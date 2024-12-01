function calculateIndividualSalary(benefits ,basicSalary){
      
//we calculate grosssalary which is given by adding basic salary +allowances+commissions
 let grossSalary = basicSalary+benefits;
 //calculate payee=adding tax of tax bands to get total tax then subtracting personal reliefs from total and nhif
 let paye = 0;
 if(grossSalary <= 24000){
    paye=(grossSalary*0.10);

 }else if (grossSalary <= 32333){
    paye=24000*0.10+(grossSalary-24000)*0.25;


 }else if (grossSalary <=500000){
    paye=24000*0.10+8332*0.25+(grossSalary-32333)*0.30;//(32,333-24,001=8332)


 }else if (grossSalary <=800000){
    paye=24000*0.10+8332*0.25+467666*0.30(grossSalary-500000)*0.325;//(500,000-32,334=467,666)

 }else{
    paye=24000*0.10 + 8332*0.25 +467666*0.30 + 299999*0.325 + (grossSalary-800000)*0.35;//(800,000-500,001=299,999)
 }
//calculate nhif deductions
let nhif = 0;
    if (grossSalary < 6000) {
        nhif = 150;
   
 } else if (grossSalary < 8000) {
        nhif = 300;  

      } else if (grossSalary < 12000) {
         nhif = 400;

        } else if (grossSalary < 15000) {
            nhif = 500;

          } else if (grossSalary < 20000) {
              nhif = 600;

             } else if (grossSalary < 25000) {
               nhif = 750;

           } else if (grossSalary < 30000) {
            nhif = 850;

                } else if (grossSalary<35000){
                   nhif = 900;

                  }else if (grossSalary  <40000){
                    nhif = 950;

                   }else if (grossSalary  <45000){
                      nhif = 1000;

                     }else if (grossSalary  <50000){
                          nhif = 1100;

                       }else if (grossSalary  <60000){
                            nhif = 1200;

                           }else if (grossSalary  <70000){
                               nhif = 1300;

                                }else if (grossSalary  <80000){
                                 nhif = 1400;

                                   }else if (grossSalary  <90000){
                                     nhif = 1500;

                                         }else {
                                             nhif = 1700;  
  }


    //Nssf deductions
let nssf =grossSalary*0.06;

//net salary=grosssalary-paye-nhif deduction-nssf deduction
      let netSalary =grossSalary-paye-nhif-nssf;

return{
    grossSalary: grossSalary,
    paye: paye,
    nhif: nhif,
    nssf: nssf,
    netSalary: netSalary
};


} 

