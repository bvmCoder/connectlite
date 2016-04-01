angular.module('starter').service('userInformationService', ['$http',function userInformationService($http) {


this.getCustomer=function(data){
	console.log("getCustomer");
	console.log(data);
	/*$.ajax(function(){
		url: 'http://localhost:8080/customerSearch?firstName=JOHN&lastName=SMITH',
		dataType: 'jsonp',
		type: 'G',
		success: function(data){
			console.log(data);
		}
	});
 $ajax.get('http://localhost:8080/customerSearch?firstName=JOHN&lastName=SMITH')
	.success(function (data, status, headers, config) {
	  console.log(data);
	})
	.error(function (data, status, header, config) {
	});	 */
	
}


  this.customers = [{
    "EnterpriseCustomer" : [
    {
      "EnterpriseID" : "0059391510",
      "IndividualBusinessCode" : "I",
      "CustomerSubType" :
      {
        "Code" : "999"
      },
      "SSNTIN" : "507267194",
      "EnterpriseIndNonIndInfo" :
      {
        "EnterpriseIndInfo" :
        {
          "IndName" :
          {
            "FirstName" : "JOHN",
            "LastName" : "LEWIS"
          }
        }
      },
      "Address" :
      {
        "AddressLine1" : "4301 OAKVIEW CIR",
        "City" : "ALPINE",
        "State" :
        {
          "Code" : "UT"
        },
        "PostalArea" : "840040000",
        "Country" : "United States/US territories"
      },
      "Email":"MASKED.EMAIL2@JPMCHASE.COM",
      "RecentActivities": [{
        "taskDescription": "Customer Call",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
        "CustomerNote":"Requested Cheque Book"
      }, {
        "taskDescription": "Joint Customer Call",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "pending",
        "CustomerNote":"Requested Cheque Book"
      }, {
        "taskDescription": "Customer Visit at Business",
        "Date": "12/31/2015",
        "Category": "transaction",
         "Status": "completed",
        "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Customer Visit at Business",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
        "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Profiled",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "pending",
        "CustomerNote":"Opened a new Account"
      }]
    },
    {
      "EnterpriseID" : "0263322565",
      "IndividualBusinessCode" : "I",
      "CustomerSubType" :
      {
        "Code" : "999"
      },
      "SSNTIN" : "528350619",
      "EnterpriseIndNonIndInfo" :
      {
        "EnterpriseIndInfo" :
        {
          "IndName" :
          {
            "FirstName" : "KEVIN",
            "LastName" : "GIBBONS"
          }
        }
      },
      "Address" :
      {
        "AddressLine1" : "375 CRIMSON CIR APT 11R",
        "City" : "SALT LAKE CITY",
        "State" :
        {
          "Code" : "UT"
        },
        "PostalArea" : "840040000",
        "Country" : "United States/US territories"
      },
      "Email":"MASKED.EMAIL2@JPMCHASE.COM",
      "RecentActivities": [{
        "taskDescription": "Profiled",
        "Date": "12/31/2015",
        "Category": "note",
        "Status": "completed"
      }, {
        "taskDescription": "Customer Call",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "completed",
         "CustomerNote":"Increased the Credit Limit"
      }, {
        "taskDescription": "Profiled",
        "Date": "12/31/2015",
        "Category": "transaction",
         "Status": "pending",
         "CustomerNote":"Increased the Credit Limit"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "pending",
         "CustomerNote":"Opened a new Account"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "pending",
         "CustomerNote":"Opened a new Account"
      }]
    },
    {

    "EnterpriseID" : "0263322999",
    "IndividualBusinessCode" : "I",
    "CustomerSubType" :
    {
      "Code" : "999"
    },
    "SSNTIN" : "528350999",
    "EnterpriseIndNonIndInfo" :
    {
      "EnterpriseIndInfo" :
      {
        "IndName" :
        {
          "FirstName" : "KEVIN",
          "LastName" : "ADDY"
        }
      }
    },
    "Address" :
    {
      "AddressLine1" : "375 CRIMSON CIR APT 11R",
      "City" : "SALT LAKE CITY",
      "State" :
      {
        "Code" : "UT"
      },
      "PostalArea" : "840040000",
      "Country" : "United States/US territories"
    },
    "Email":"MASKED.EMAIL2@JPMCHASE.COM",
    "RecentActivities": [{
      "taskDescription": "Scheduled Appointment",
      "Date": "12/31/2015",
      "Category": "note",
       "Status": "pending",
      "CustomerNote":"Opened a new Account"
    }, {
      "taskDescription": "Scheduled Appointment",
      "Date": "12/31/2015",
      "Category": "Oppurtunity",
       "Status": "completed",
         "CustomerNote":"Opened a new Account"
    }, {
      "taskDescription": "Scheduled Appointment",
      "Date": "12/31/2015",
      "Category": "transaction",
       "Status": "pending",
         "CustomerNote":"Opened a new Account"
    }, {
      "taskDescription": "Profiled",
      "Date": "12/31/2015",
      "Category": "note",
       "Status": "completed",
         "CustomerNote":"Increased the Credit Limit"
    }, {
      "taskDescription": "Profiled",
      "Date": "12/31/2015",
      "Category": "Oppurtunity",
       "Status": "completed",
         "CustomerNote":"Increased the Credit Limit"
    }]
  },
    {

      "EnterpriseID" : "0059391509",
      "IndividualBusinessCode" : "I",
      "CustomerSubType" :
      {
        "Code" : "999"
      },
      "SSNTIN" : "507267143",
      "EnterpriseIndNonIndInfo" :
      {
        "EnterpriseIndInfo" :
        {
          "IndName" :
          {
            "FirstName" : "STAN",
            "LastName" : "LEE"
          }
        }
      },
      "Address" :
      {
        "AddressLine1" : "4301 OAKVIEW CIR",
        "City" : "ALPINE",
        "State" :
        {
          "Code" : "UT"
        },
        "PostalArea" : "840040000",
        "Country" : "United States/US territories"
      },
      "Email":"MASKED.EMAIL2@JPMCHASE.COM",
      "RecentActivities": [{
        "taskDescription": "Scheduled Appointmentd",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
         "CustomerNote":"Requested Cheque Book"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "completed",
         "CustomerNote":"Requested Cheque Book"

      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "transaction",
         "Status": "completed",
         "CustomerNote":"Requested Cheque Book"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
         "CustomerNote":"Requested Cheque Book"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "pending",
         "CustomerNote":"Opened a new Account"
      }]
    },
    {

      "EnterpriseID" : "0263391242",
      "IndividualBusinessCode" : "I",
      "CustomerSubType" :
      {
        "Code" : "999"
      },
      "SSNTIN" : "507267194",
      "EnterpriseIndNonIndInfo" :
      {
        "EnterpriseIndInfo" :
        {
          "IndName" :
          {
            "FirstName" : "KARENA",
            "LastName" : "HAIRELL"
          }
        }
      },
      "Address" :
      {
        "AddressLine1" : "4301 OAKVIEW CIR",
        "City" : "ALPINE",
        "State" :
        {
          "Code" : "UT"
        },
        "PostalArea" : "840040000",
        "Country" : "United States/US territories"
      },
      "Email":"MASKED.EMAIL2@JPMCHASE.COM",
      "RecentActivities": [{
        "taskDescription": "Left Message",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
         "CustomerNote":"Opened a new Account"
      }, {
        "taskDescription": "Joint Customer Call",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "completed",
         "CustomerNote":"Opened a new Account"
      }, {
        "taskDescription": "Left Message",
        "Date": "12/31/2015",
        "Category": "transaction",
         "Status": "pending",
         "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Joint Customer Call",
        "Date": "12/31/2015",
        "Category": "note",
        "Status": "pending",
         "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Left Message",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
        "Status": "completed",
         "CustomerNote":"Increased the Credit Limit"
      }]
    },
{

      "EnterpriseID" : "1263391242",
      "IndividualBusinessCode" : "I",
      "CustomerSubType" :
      {
        "Code" : "999"
      },
      "SSNTIN" : "507267194",
      "EnterpriseIndNonIndInfo" :
      {
        "EnterpriseIndInfo" :
        {
          "IndName" :
          {
            "FirstName" : "KARENA",
            "LastName" : "HAIRELL"
          }
        }
      },
      "Address" :
      {
        "AddressLine1" : "4301 OAKVIEW CIR",
        "City" : "ALPINE",
        "State" :
        {
          "Code" : "UT"
        },
        "PostalArea" : "840040000",
        "Country" : "United States/US territories"
      },
      "Email":"MASKED.EMAIL2@JPMCHASE.COM",
      "RecentActivities": [{
        "taskDescription": "Joint Customer Call",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
         "CustomerNote":"Increased the Credit Limit"
      }, {
        "taskDescription": "Joint Customer Call",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "completed",
         "CustomerNote":"Increased the Credit Limit"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "transaction",
         "Status": "pending",
         "CustomerNote":"Requested Cheque Book"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "pending",
         "CustomerNote":"Requested Cheque Book"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "completed",
         "CustomerNote":"Inquired about Home Mortgage"
      }]
    },
{

      "EnterpriseID" : "0265391242",
      "IndividualBusinessCode" : "I",
      "CustomerSubType" :
      {
        "Code" : "999"
      },
      "SSNTIN" : "507267194",
      "EnterpriseIndNonIndInfo" :
      {
        "EnterpriseIndInfo" :
        {
          "IndName" :
          {
            "FirstName" : "KARENA",
            "LastName" : "HAIRELL"
          }
        }
      },
      "Address" :
      {
        "AddressLine1" : "4301 OAKVIEW CIR",
        "City" : "ALPINE",
        "State" :
        {
          "Code" : "UT"
        },
        "PostalArea" : "840040000",
        "Country" : "United States/US territories"
      },
      "Email":"MASKED.EMAIL2@JPMCHASE.COM",
      "RecentActivities": [{
        "taskDescription": "Joint Customer Call",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
         "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Joint Customer Call",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "completed",
         "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "transaction",
         "Status": "completed",
         "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Joint Customer Call",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "pending",
         "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "pending",
         "CustomerNote":"Inquired about Home Mortgage"
      }]
    },
{

      "EnterpriseID" : "0265691242",
      "IndividualBusinessCode" : "I",
      "CustomerSubType" :
      {
        "Code" : "999"
      },
      "SSNTIN" : "507267194",
      "EnterpriseIndNonIndInfo" :
      {
        "EnterpriseIndInfo" :
        {
          "IndName" :
          {
            "FirstName" : "KARENA",
            "LastName" : "HAIRELL"
          }
        }
      },
      "Address" :
      {
        "AddressLine1" : "4301 OAKVIEW CIR",
        "City" : "ALPINE",
        "State" :
        {
          "Code" : "UT"
        },
        "PostalArea" : "840040000",
        "Country" : "United States/US territories"
      },
      "Email":"MASKED.EMAIL2@JPMCHASE.COM",
      "RecentActivities": [{
        "taskDescription": "Joint Customer Call",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
         "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Joint Customer Call",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "pending",
         "CustomerNote":"Increased the Credit Limit"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "transaction",
         "Status": "pending",
         "CustomerNote":"Increased the Credit Limit"
      }, {
        "taskDescription": "Joint Customer Call",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
         "CustomerNote":"Increased the Credit Limit"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "completed",
         "CustomerNote":"Requested Cheque Book"
      }]
    },	
{

      "EnterpriseID" : "0273391242",
      "IndividualBusinessCode" : "I",
      "CustomerSubType" :
      {
        "Code" : "999"
      },
      "SSNTIN" : "507267194",
      "EnterpriseIndNonIndInfo" :
      {
        "EnterpriseIndInfo" :
        {
          "IndName" :
          {
            "FirstName" : "KARENA",
            "LastName" : "HAIRELL"
          }
        }
      },
      "Address" :
      {
        "AddressLine1" : "4301 OAKVIEW CIR",
        "City" : "ALPINE",
        "State" :
        {
          "Code" : "UT"
        },
        "PostalArea" : "840040000",
        "Country" : "United States/US territories"
      },
      "Email":"MASKED.EMAIL2@JPMCHASE.COM",
      "RecentActivities": [{
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
         "CustomerNote":"Requested Cheque Book"
      }, {
        "taskDescription": "Customer Visit at Business",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "completed",
         "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "transaction",
         "Status": "completed",
         "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Customer Visit at Business",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
         "CustomerNote":"Inquired about Home Mortgage"
      }, {
        "taskDescription": "Scheduled Appointment",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "completed",
         "CustomerNote":"Inquired about Home Mortgage"
      }]
    },
{

      "EnterpriseID" : "0263391342",
      "IndividualBusinessCode" : "I",
      "CustomerSubType" :
      {
        "Code" : "999"
      },
      "SSNTIN" : "507267194",
      "EnterpriseIndNonIndInfo" :
      {
        "EnterpriseIndInfo" :
        {
          "IndName" :
          {
            "FirstName" : "KARENA",
            "LastName" : "HAIRELL"
          }
        }
      },
      "Address" :
      {
        "AddressLine1" : "4301 OAKVIEW CIR",
        "City" : "ALPINE",
        "State" :
        {
          "Code" : "UT"
        },
        "PostalArea" : "840040000",
        "Country" : "United States/US territories"
      },
      "Email":"MASKED.EMAIL2@JPMCHASE.COM",
      "RecentActivities": [{
        "taskDescription": "Customer Visit at Business",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "completed",
         "CustomerNote":"Opened a new Account"
      }, {
        "taskDescription": "Left Message",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "completed",
         "CustomerNote":"Opened a new Account"
      }, {
        "taskDescription": "Customer Visit at Business",
        "Date": "12/31/2015",
        "Category": "transaction",
         "Status": "pending",
         "CustomerNote":"Opened a new Account"
      }, {
        "taskDescription": "Note Created",
        "Date": "12/31/2015",
        "Category": "note",
         "Status": "pending",
         "CustomerNote":"Opened a new Account"
      }, {
        "taskDescription": "Left Message",
        "Date": "12/31/2015",
        "Category": "Oppurtunity",
         "Status": "pending",
         "CustomerNote":"Inquired about Home Mortgage"
      }]
    }	
    
    ]
  }];


}]);
