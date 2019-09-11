/*
 * @Author: yang_cui 
 * @Date: 2019-09-11 18:30:40 
 * @Last Modified by: yang_cui
 * @Last Modified time: 2019-09-11 19:02:42
 * @this file for tax compute
 */

 /**
  * @param income {many income}
  * @returns tax
  */
module.exports = (income)=>{
     let tax=0;
      if(income<0)return 0

      if(income<=14000){
  
          tax=parseInt((income*115)/1000);
  
      }else if(income > 14000 && income<=48000){
  
          tax=parseInt(((income-14000)*210)/1000)   + 1610;
  
      }else if(income > 48000 && income <=70000){
  
          tax=parseInt(((income-48000)*315)/1000)  +7140+1610;
  
      }else if(income >70000 ){
  
          tax=parseInt(((income-70000)*355)/1000) +7140+1610+6930;
  
      }
  
      return tax;
}
