/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */

 const config = [
    {
        allLines: false,
      //  id: "PY",
        description: "payment line",
        values: [
            '<PmtRec PmtMethod="CHK" ',
            'PmtCrDr="C">',
            "\n",
            "\t",
            "\t",
            "<Check>",
            "\n",
            "\t",
            "\t",
            "\t",
            "<ChkDocNum>",
            "{Transaction Number}",
            "</ChkDocNum>",
            "\n",
            "\t",
            "\t",
            "</Check>",
            "\n",
          
            "\t",
            "\t",
            "<ValueDate>",
            "{Process Date}",
            "</ValueDate>",
            "\n",
            "\t",
            "\t",
            "<CurAmt>",
            "{Payment Amount}",
            "</CurAmt>",
            "\n",
            "\t",
            "\t",
            "<CurCode>",
            "USD",
            "</CurCode>",
            "\n",
            "\t",
            "\t",
            "<OrgnrDepAcctID>",
            "\n",
            "\t",
            "\t",
            "\t",
            '<DepAcctID AcctType="D" ',
            'AcctID=',
            '"',
           "{accno}",
           '"',
            '>',
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
            '<BankInfo BankIDType="ABA">',
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
            "\t",
            "<BankID>",
            "{bankno}",
            "</BankID> ",
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
            "</BankInfo>",
            "\n",
            "\t",
            "\t",
            "\t",
            "</DepAcctID>",
            "\n",
            "\t",
            "\t",
            "</OrgnrDepAcctID>"

          


        ]
    },                  
    {
        allLines: false,
        //id: "PA",
        description: "Originating Line",
        values: [
         //   "PR",
        
         "\t",
         "\t",
         "<OrgnrParty>",
         "\n",
           "\t",
           "\t",
           "\t",
            "<Name>",
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
                "<Name1>",
                "{Name}",
                "</Name1>",
                "\n",
            "\t",
            "\t",
            "\t",
           
           "</Name>",
            "\n",
            "\t",
         "\t",
         "\t",
            "<PostAddr>",
            "\n",
            "\t",
         "\t",
         "\t",
         "\t",
            "Updike Distribution Logistics, LLC",
            "\n",
            "\t",
         "\t",
         "\t",
            "</PostAddr>",
            "\n",
            "\t",
            "\t",
            "</OrgnrParty>"
        ]
    },
    {
        allLines: false,
       // id: "PA",
        description: "Destination Line",
        values: [
           // "PE",
         
           "\t",
           "\t",
           "<RcvrParty>",
           "\n",
           "\t",
           "\t",
           "\t",
            "<Name>",
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
                "<Name1>",
                "{Name}",
                "</Name1>",
                "\n",
            "\t",
            "\t",
            "\t",
           
           "</Name>",
           "\n",
           "\t",
           "\t",
           "\t",
           '<RefInfo RefType="VN">',
           "\n",
           "\t",
           "\t",
           "\t",
           "\t",
           "<RefID>",
            "{Identification Number}",
            "</RefID>",
            "\n",
            "\t",
            "\t",
            "\t",
           
            "</RefInfo>",
            "\n",
           "\t",
           "\t",
           "\t",
            "<PostAddr>",
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
            "<Addr1>",
            "{Address Line 1}",
            "</Addr1>",
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
            "<Addr2>",
            "{Address Line 2}",
            "</Addr2>",
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
            "<City>",
           
            "{City}",
            "</City>",
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
            "<StateProv>",
            
            "{State / Province}",
            "</StateProv>",
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
            "<PostalCode>",
            "{Postal Code}",
            "</PostalCode>",
            "\n",
            "\t",
            "\t",
            "\t",
            
            "</PostAddr>",
            "\n",
            "\t",
            "\t",
            "</RcvrParty>",
           
          
        
        ]
    },
    {

        
        allLines: false,
        //id: "CK",
        description: "Supplemental",
        values: [
            
           "\t",
           "\t",
            "<Check>",
            "\n",
            "\t",
            "\t",
            "\t",
            "<ChkNum>",
            "{RecordId}",
            "</ChkNum>",
            "\n",
            "\t",
            "\t",
            "\t",
            
           "<DeliveryCode>",
            "100",
            "</DeliveryCode>",
            "\n",
            "\t",
            "\t",
            
            "</Check>",
            
        ]
    },
    {
        allLines: true,
        //id: "IN",
        description: "Invoice Line",
        values: [
            "\t",
            "\t",
            "<PmtDetail>",
            "\n",
            "\t",
            "\t",
            "\t",
            "<InvoiceInfo ",
            " InvoiceNum=",
            '"',
            "{Invoice Number}",
            '"',,
            " EffDt=",
            '"',
            "{Invoice Date}",
            '"',
            " NetCurAmt=",
            '"',
           "{Invoice (payment) Net Amount}",
           '"',
            " TotalCurAmt=",
            '"',
            "{Invoice Gross Amount}",
            '"',
            " InvoiceType=",
            '"',
            "IV",
            '"',
            ">",
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
            '<Note NoteType="INV">',
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
            "\t",
            "<NoteText>",
            "{Invoice Description}",
            "</NoteText>",
            "\n",
            "\t",
            "\t",
            "\t",
            "\t",
            "</Note>",
            "\n",
            "\t",
            "\t",
            "\t",
          
            
            "</InvoiceInfo>",
            "\n",
            "\t",
            "\t",
          
        
            "</PmtDetail>",
          
           
        ]
    },
    {
        allLines: false,
        //id: "IN",
        description: "Invoice Line",
        values: [
            
            "</PmtRec>"
           


        ]
    }
]

define(['N/record', 'N/search', 'N/sftp', 'N/runtime', 'N/file'],
    /**
 * @param{record} record
 * @param{search} search
 * @param{sftp} sftp
 * @param{runtime} runtime
 * @param{file} file
 */
    (record, search, sftp, runtime, file) => {
        /**
         * Defines the function that is executed at the beginning of the map/reduce process and generates the input data.
         * @param {Object} inputContext
         * @param {boolean} inputContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {Object} inputContext.ObjectRef - Object that references the input data
         * @typedef {Object} ObjectRef
         * @property {string|number} ObjectRef.id - Internal ID of the record instance that contains the input data
         * @property {string} ObjectRef.type - Type of the record instance that contains the input data
         * @returns {Array|Object|Search|ObjectRef|File|Query} The input data to use in the map/reduce process
         * @since 2015.2
         */

        const getInputData = (inputContext) => {
            const scriptObj = runtime.getCurrentScript();
            const searchId = scriptObj.getParameter({
                name: "custscript_sftp_mr_search"
            });

            const fileNameRoot = scriptObj.getParameter({
                name: "custscript_sftp_mr_filename"
            });

            let delim = scriptObj.getParameter({
                name: "custscript_sftp_mr_delimiter"
            });

            if (delim) {
                delim = "";
            }

            let recordIdField = scriptObj.getParameter({
                name: "custscript_sftp_mr_keyfield"
            });

            const recordType = scriptObj.getParameter({
                name: "custscript_sftp_mr_record_type_to_update"
            });

            const logLinkField = scriptObj.getParameter({
                name: "custscript_sftp_mr_record_log_field"
            });
            
            const searchObj = search.load({
                id: searchId
            });

            const fileExtension = delim === "," ? ".csv" : ".xml";

            if (!recordIdField || recordIdField === "") {
                recordIdField = "cp_integration_record_id";
            }

            const today = new Date();
            today.toDateString();

            const fileName = fileNameRoot + today.toISOString().replace(/:|-|\./g, "") + fileExtension;

            const searchResults = jsonSearchResults(searchObj);

            var filterResult= searchResults.filter( el => el["PFA Record"] == "" );

            // log.debug("filterResult",filterResult)

            var customrecord_updike_bank_details_recordSearchObj = search.create({
                type: "customrecord_updike_bank_details_record",
                filters:
                [
                ],
                columns:
                [
                   search.createColumn({name: "custrecord_updike_account_number", label: "Account Number"}),
                   search.createColumn({name: "custrecord_updike_routing_number", label: "Routing Number"}),
                   search.createColumn({name: "custrecord_updike_subsidiary", label: "Subsidiary"})
                ]
             });


        var resultCustomBankRecord = customrecord_updike_bank_details_recordSearchObj
        .run()
        .getRange(0, 1000);
       // log.debug("resultCustomBankRecord",resultCustomBankRecord);
        let searchLength=resultCustomBankRecord.length;
        //log.debug("length of search",resultCustomBankRecord.length);


        var newArray=[];
        for(var i=0; i<searchLength; i++){
            var getSubsidiary = resultCustomBankRecord[i].getValue({
                name: "custrecord_updike_subsidiary", label: "Subsidiary"
              });
        
            //  log.debug("getSubsidiary",getSubsidiary);

              var getAccNo = resultCustomBankRecord[i].getValue({
                name: "custrecord_updike_account_number", label: "Account Number"
              });
        
             // log.debug("getAccNo",getAccNo);

              var getRoutingNo = resultCustomBankRecord[i].getValue({
                name: "custrecord_updike_routing_number", label: "Routing Number"
              });
        
             // log.debug("getRoutingNo",getRoutingNo);

              newArray.push({
                "getSubsidiary":getSubsidiary,
                "getAccNo":getAccNo,
                "getRoutingNo":getRoutingNo

              })
        }

       // log.debug("array",newArray);

        //log.debug("search for test",searchResults);
        if (filterResult.length > 0) {
        var subsidiaryFromResult=filterResult[0]["Subsidiary"];

       // log.debug("subsidiaryFromResult",subsidiaryFromResult);


        function findSubsidairy(subsidairy) {
            return subsidairy.getSubsidiary === subsidiaryFromResult
          }
          
          let mySub = newArray.find(subsidairy => findSubsidairy(subsidairy));
          
         
        let getAccountNum=mySub.getAccNo;
        let getBankNum=mySub.getRoutingNo;

        for(var i=0; i<filterResult.length;i++){
          let obj = filterResult[i];

    obj.accno = getAccountNum

    obj.bankno = getBankNum


    filterResult[i] = obj
        }

   // log.debug("search final",searchResults);
    }
            if (filterResult.length > 0) {
                let recordCount = 0;
                let totalAmount = 0;
                let paymentControl = today.toISOString().replace(/[^0-9]/g, '').substring(0, 15)

                const idAmountUnique = {};
                const groupedResults = {};

                filterResult.forEach((obj) => {
                    if (!idAmountUnique[obj.cp_integration_record_id] || (obj["cp_integration_trailer_sum_value"] && obj["cp_integration_trailer_sum_value"] !== "" && obj["cp_integration_trailer_sum_value"] !== 0)) {
                        idAmountUnique[obj.cp_integration_record_id] = obj.cp_integration_trailer_sum_value;
                        groupedResults[obj.cp_integration_record_id] = [];
                    }
                });

                // log.debug({
                //     title: "ID Amount unique",
                //     details: idAmountUnique
                // })

                recordCount = Object.keys(idAmountUnique).length;

                // log.debug("recordCount",recordCount);

                totalAmount = Object.values(idAmountUnique).reduce((prev, cur) => {
                    return parseFloat(prev) + Math.abs(parseFloat(cur));
                }, 0);

                totalAmount = Math.round(totalAmount * 100) / 100;
                totalAmount = totalAmount.toFixed(2);

// log.debug("searchResults for audit",filterResult);


var pfaArray=[];
for(var i=0; i<filterResult.length;i++){
    var pfaRecord = filterResult[i]["PFA Record"];

    // log.debug("pfa record",pfaRecord);

pfaArray.push(pfaRecord);

  }
//   log.debug("pfaArray",pfaArray);
  var pfaArrayLen=pfaArray.length;
//   log.debug("pfaArrayLen",pfaArrayLen);
//if(!pfaArrayLen){
                const integrationAudit = record.create({
                    type: "customrecord_cp_integration_audit"
                });

                integrationAudit.setValue({
                    fieldId: "name",
                    value: fileName
                });


                integrationAudit.setValue({
                    fieldId: "custrecord_cp_integration_footer",
                    
                    value: `\n`+`\t`+`\t`+`\n`+`<FileInfoGrp FileControlNumber= `+`"${paymentControl}" FileDate="${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}" />`+`\n` +`</File>`
                });

                integrationAudit.setValue({
                    fieldId: "custrecord_cp_integration_headers",
                    value: `<?xml version="1.0" standalone="no"?>`+`\n`+`<File PmtRecCount=`+`"${recordCount}" PmtRecTotal= "${totalAmount}" >`+`\n`
                });

                var savedLog = integrationAudit.save();

//}

                const mappedResults = filterResult.map((rowObj) => {
                    rowObj["cp_integration_log_id"] = savedLog;
                    rowObj["cp_integration_log_fieldid"] = logLinkField;
                    rowObj["cp_integration_record_id"] = rowObj[recordIdField];
                    rowObj["cp_integration_delim"] = delim;

                    if ((!rowObj["cp_integration_record_type"] || rowObj["cp_integration_record_type"] === "") && recordType && recordType !== "") {
                        rowObj["cp_integration_record_type"] = recordType;
                    }

                    return rowObj;
                });
                // log.debug({
                //     title: "Mapped Results",
                //     details: mappedResults
                // })
                mappedResults.forEach((result) => {
                    groupedResults[result.cp_integration_record_id].push(result);
                });

                return Object.values(groupedResults);

            } else {
                return [];
            }
        }

        const jsonSearchResults = (searchObj) => {
            var columns = searchObj.columns;
            columns = columns.map((column)=>{

                return search.createColumn({
                    name: column.name,
                    join: column.join,
                    formula: column.formula,
                    label: column.label
                });
            });
            
            // log.debug({
            //     title: "Columns",
            //     details: columns
            // });
            var resultsObj = [];

            // page data to allow for control over iteration
            var searchResults = searchObj.runPaged();


            // searchResults is a PagedData object, iterate through ranges
            //   ranges themselves are meta data only PagedData.fetch needs to be used for data retrieval
            for (var rangeCounter = 0; rangeCounter < searchResults.pageRanges.length; rangeCounter++) {
                var page = searchResults.fetch({
                    'index': rangeCounter
                });

                for (var resultCounter = 0; resultCounter < page.data.length; resultCounter++) {
                    var lineObj = {}
                    // using basic for loop to avoid race conditions with callback and parent loop
                    for (var i = 0; i < columns.length; i++) {
                        const columnValue = page.data[resultCounter].getValue(columns[i]);

                        lineObj[columns[i].label ? columns[i].label : columns[i].name] = columnValue;
                    }

                    resultsObj.push(lineObj);
                }
            }
            return resultsObj;
        }

        /**
         * Defines the function that is executed when the map entry point is triggered. This entry point is triggered automatically
         * when the associated getInputData stage is complete. This function is applied to each key-value pair in the provided
         * context.
         * @param {Object} mapContext - Data collection containing the key-value pairs to process in the map stage. This parameter
         *     is provided automatically based on the results of the getInputData stage.
         * @param {Iterator} mapContext.errors - Serialized errors that were thrown during previous attempts to execute the map
         *     function on the current key-value pair
         * @param {number} mapContext.executionNo - Number of times the map function has been executed on the current key-value
         *     pair
         * @param {boolean} mapContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {string} mapContext.key - Key to be processed during the map stage
         * @param {string} mapContext.value - Value to be processed during the map stage
         * @since 2015.2
         */

        const map = (mapContext) => {
            try {
                const searchResultValues = JSON.parse(mapContext.value);
                // log.debug({
                //     title: "Map Context",
                //     details: searchResultValues
                // });

                const logId = searchResultValues[0]["cp_integration_log_id"];
                const logFieldId = searchResultValues[0]["cp_integration_log_fieldid"];
                const recordId = searchResultValues[0]["cp_integration_record_id"];
                const recordType = searchResultValues[0]["cp_integration_record_type"];
                const delim = searchResultValues[0]["cp_integration_delim"];




                Object.keys(searchResultValues[0]).forEach((key) => {
                    if (/^cp_integration/.test(key)) {
                        for (let i = 0; i < searchResultValues.length; i++) {
                            delete searchResultValues[i][key];
                        }
                    }
                });

                const valueObject = [];

               

                config.forEach(({allLines, id, values: columnIds})=>{
                    for (let i = 0; i < searchResultValues.length; i++) {
                        const resultValue = searchResultValues[i];
                        const valuesLine = [id];
                        columnIds.forEach((columnId)=>{
                            let value;
                            if (/{([A-z\s/0-9\(\)\-]+)}/.test(columnId)) {
                                columnId = columnId.replace("{", "").replace("}", "").trim();
                                // log.debug({
                                //     title: "Column ID check",
                                //     details: `columnId: ${columnId}, resultVal = ${resultValue[columnId]}`
                                // });

                                if (resultValue[columnId] === undefined) {
                                    value = "missing - " + columnId
                                } else {
                                    value = resultValue[columnId];
                                }
                            } else {
                                // static value
                                value = columnId;
                            }
                            valuesLine.push(value);
                           
                        });

                        valueObject.push(valuesLine);

                        // log.debug("valueObject",valueObject);
                        // if false only the first line, if true, all lines
                        if (!allLines) {
                            break;
                        }
                    }
                });
                
                const combined = valueObject.map((subLine) => {
                    return cleanRow(subLine, delim);
                }).join("\r\n");

                mapContext.write({
                    key: `${logId}-${logFieldId}-${recordType}-${recordId}`,
                    value: combined
                });

            } catch (error) {
                log.error({
                    title: "Caught error in Map stage",
                    details: error
                })
            }
        }

        /**
         * Defines the function that is executed when the reduce entry point is triggered. This entry point is triggered
         * automatically when the associated map stage is complete. This function is applied to each group in the provided context.
         * @param {Object} reduceContext - Data collection containing the groups to process in the reduce stage. This parameter is
         *     provided automatically based on the results of the map stage.
         * @param {Iterator} reduceContext.errors - Serialized errors that were thrown during previous attempts to execute the
         *     reduce function on the current group
         * @param {number} reduceContext.executionNo - Number of times the reduce function has been executed on the current group
         * @param {boolean} reduceContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {string} reduceContext.key - Key to be processed during the reduce stage
         * @param {List<String>} reduceContext.values - All values associated with a unique key that was passed to the reduce stage
         *     for processing
         * @since 2015.2
         */
        const reduce = (reduceContext) => {
            try {

                
                   
                
                // log.debug({
                //     title: `Reduce context for key: ${reduceContext.key}`,
                //     details: reduceContext.values
                // });

                const [logId, logFieldId, recordType, recordId] = reduceContext.key.split("-");

                reduceContext.write({
                    key: logId,
                    value: reduceContext.values.join('\r\n')
                });

                const valueObj = {};
                valueObj[logFieldId] = logId;

                record.submitFields({
                    id: recordId,
                    type: recordType,
                    values: valueObj
                });

            
            } catch (error) {
                log.error({
                    title: "Caught error in Reduce stage",
                    details: error
                })
            }

        }

        const cleanRow = (value, delim) => {
            const spaceReplace = new RegExp('_', "g");

            return value.map((columnVal) => {
                if (columnVal && columnVal !== "") {
                    const cleaned = columnVal.replace(/[\r\n]/g, ' ');

                    if (delim && delim !== "" && cleaned.indexOf(delim) !== -1) {
                        return `"${cleaned}"`;
                    } else if (!delim || delim === "") {
                        return columnVal.replace(spaceReplace, ' ');
                    } else {
                        return cleaned;
                    }
                } else {
                    return columnVal;
                }
            }).join(delim);
        }


        /**
         * Defines the function that is executed when the summarize entry point is triggered. This entry point is triggered
         * automatically when the associated reduce stage is complete. This function is applied to the entire result set.
         * @param {Object} summaryContext - Statistics about the execution of a map/reduce script
         * @param {number} summaryContext.concurrency - Maximum concurrency number when executing parallel tasks for the map/reduce
         *     script
         * @param {Date} summaryContext.dateCreated - The date and time when the map/reduce script began running
         * @param {boolean} summaryContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {Iterator} summaryContext.output - Serialized keys and values that were saved as output during the reduce stage
         * @param {number} summaryContext.seconds - Total seconds elapsed when running the map/reduce script
         * @param {number} summaryContext.usage - Total number of governance usage units consumed when running the map/reduce
         *     script
         * @param {number} summaryContext.yields - Total number of yields when running the map/reduce script
         * @param {Object} summaryContext.inputSummary - Statistics about the input stage
         * @param {Object} summaryContext.mapSummary - Statistics about the map stage
         * @param {Object} summaryContext.reduceSummary - Statistics about the reduce stage
         * @since 2015.2
         */
        const summarize = (summaryContext) => {
            try {
                const scriptObj = runtime.getCurrentScript();

                const folderId = scriptObj.getParameter({
                    name: "custscript_sftp_mr_folder"
                });

                const sftpConfigId = scriptObj.getParameter({
                    name: "custscript_sftp_mr_config"
                });

                const includeHeader = scriptObj.getParameter({
                    name: "custscript_sftp_mr_include_header"
                });

                const path = scriptObj.getParameter({
                    name: "custscript_sftp_mr_path"
                });

                const dataByKey = {};
// log.debug("summaryContext",summaryContext);

                summaryContext.output.iterator().each(function (key, value) {
                    log.audit({
                        title: ' summary.output.iterator',
                        details: 'key: ' + key + ' / value: ' + value
                    });

                    if (!dataByKey[key]) {
                        dataByKey[key] = [];
                    }

                    dataByKey[key].push(value);

                    return true;
                });
               
                Object.keys(dataByKey).forEach((key) => {
                    const { name, custrecord_cp_integration_headers, custrecord_cp_integration_footer } = search.lookupFields({
                        id: key,
                        type: "customrecord_cp_integration_audit",
                        columns: ["name", "custrecord_cp_integration_headers", "custrecord_cp_integration_footer"]
                    });

                    var fileContents = dataByKey[key].join("\r\n");

                    // log.debug("filecon",fileContents);

                    if (includeHeader && fileContents!="null") {
                        fileContents = custrecord_cp_integration_headers + "\r\n" + fileContents + "\r\n" + custrecord_cp_integration_footer;
 
                    }

                
                    
                    

                     fileContents = String(fileContents);

                    //  log.debug("filecon after string",fileContents);
                    //  log.debug("filecon length",fileContents.length);
                    //  log.debug("filecon after typeof",typeof fileContents);


                    //  log.debug("filecon condition", (fileContents.length > 4));
                    
                    if(fileContents.length > 4){

                    var fileObj = file.create({
                        name: name,
                        fileType: file.Type.XMLDOC,
                        contents: fileContents,
                        folder: folderId
                    });

                    
                    var savedId = fileObj.save();

                }

               
                
                    if (sftpConfigId) {
                        const result = processFile(path, fileObj, sftpConfigId);

                        record.submitFields({
                            id: key,
                            type: "customrecord_cp_integration_audit",
                            values: {
                                custrecord_cp_integration_sent: result.success,
                                custrecord_cp_integration_sent_dt: result.time,
                                custrecord_cp_integration_file: savedId,
                                custrecord_cp_integration_error: result.error
                            }
                        })
                    }
                

                });
            } catch (error) {
                log.error({
                    title: "Caught Error in Sumarize",
                    details: error
                })
            }
        }

        const processFile = (filePath, fileObj, sftpConfigId) => {
            if (sftpConfigId) {
                const {
                    custrecord_cp_sftp_url: url,
                    custrecord_cp_sftp_key_id: keyId,
                    custrecord_cp_sftp_username: username,
                    custrecord_cp_sftp_host_key: hostKey,
                    custrecord_cp_sftp_port: port,
                    custrecord_cp_sftp_password: password
                } = search.lookupFields({
                    id: sftpConfigId,
                    type: "customrecord_cp_sftp_config",
                    columns: ["custrecord_cp_sftp_url", "custrecord_cp_sftp_key_id", "custrecord_cp_sftp_username", "custrecord_cp_sftp_host_key", "custrecord_cp_sftp_port", "custrecord_cp_sftp_password"]
                });

                try {
                    sftpConnection = sftp.createConnection({
                        keyId: keyId,
                        username: username,
                        url: url,
                        hostKey: hostKey,
                        passwordGuid: password,
                        port: parseInt(port)
                    });

                    try {
                        sftpConnection.upload({
                            file: fileObj,
                            directory: filePath
                        });

                        return {
                            success: true,
                            time: new Date(),
                            error: null
                        }
                    } catch (error) {
                        log.error({
                            title: "Error uploading file",
                            details: error
                        });

                        return {
                            success: false,
                            time: null,
                            error: error
                        }
                    }
                } catch (error) {
                    log.error({
                        title: "Error Connecting to FTP",
                        details: error
                    });

                    throw error;
                }
            }
        }
        return { getInputData, map, reduce, summarize }

        /**
     * log validation to check value is null or undefined if true then execute next process else false
     * @param {number} value - pass variable name
     * @since 2015.2
     */
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
  

    });