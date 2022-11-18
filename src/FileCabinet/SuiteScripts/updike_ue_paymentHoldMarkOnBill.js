
/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */

/***********************************************************************
 * Description:  This Script will deployed on vendor bill record. User 
 * will mark true or false on 'UPDIKE - PAYMENT HOLD' checkbox in
 * 'Vendor Bills for Payment Release' search. If checkbox will check or  
 * uncheck then script will check 'UPDIKE - PAYMENT HOLD' checkbox, 
 * If it is true then script will execute and mark true to 'PAYMENT HOLD' 
 * checkbox on that particular bill record.
 
 * Version: 1.0.0 - Initial version
 * Author:  Caravel/Palavi Rajgude
 * Date:    16-11-2022  
 
 ***********************************************************************/

 define(["N/record"], function(record) {

    function aftersubmit(context){

        try{

        let loadBillRecord = context.newRecord;
        let billRecordId = loadBillRecord.id;

       if(_logValidation(billRecordId)){

            var recload = record.load({

                type: 'vendorbill',
                id: billRecordId,
                isDynamic: true
            });
           
           let paymentHoldUpdike =  recload.getValue({

                fieldId: 'custbody_updike_paymenthold',
                
            });



            
            if(paymentHoldUpdike == true){

                recload.setValue({

                    fieldId: 'paymenthold',
                    value: true
                    
                });
            }
            else{
                recload.setValue({

                    fieldId: 'paymenthold',
                    value: false
                    
                });
            }
            recload.save({
                enableSourcing: true,
                ignoreMandatoryFields: true
            });

        }
    }

        catch(e){
            log.debug('Error in aftersubmit function',e.toString());
        }
    }

    function _logValidation(value) {
        if (
          value != null &&
          value != '' &&
          value != 'null' &&
          value != undefined &&
          value != 'undefined' &&
          value != '@NONE@' &&
          value != 'NaN'
        ) {
          return true
        } else {
          return false
        }
      }

    return{

    afterSubmit : aftersubmit

    }

 })