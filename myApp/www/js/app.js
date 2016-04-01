// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ui.router','ksSwiper'])

.run(['$ionicPlatform',function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

    // Don't remove this line unless you know what you are doing. It stops the viewport
    // from snapping when text inputs are focused. Ionic handles this internally for
    // a much nicer keyboard experience.
    cordova.plugins.Keyboard.disableScroll(true);
  }
  if(window.StatusBar) {
    StatusBar.styleDefault();
  }
});
}])

.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
	$stateProvider.state('customer',
   { url:'/customer/{id:[0-9]{1,8}}', 
   controller:'CustomerDetailsController', 
   templateUrl:'partials/customerDetails.html' 
 })
 .state('search',
		 {
	 url:'/'
	 //controller:'BusinessProductsController',
	 //templateUrl:'/partials/client.html' 
		 })
 $urlRouterProvider.otherwise('search'); 
	
}])

angular.module('starter').controller('BusinessProductsController',['$scope', '$interval', '$timeout', '$ionicModal', 'userInformationService' ,'$ionicSideMenuDelegate' ,'$ionicPopup', function BusinessProductsController($scope, $interval, $timeout, $ionicModal, userInformationService,$ionicSideMenuDelegate, $ionicPopup) {
  var self = this;


  self.bankCustomers = [];
  // to unbind infinte scroll;  
  self.completedLoading = false;
  var recordsLength=0;  
  $scope.numberOfItemsToDisplay =9;  
  self.getCustomerData = function getCustomerData() {
    self.bankCustomers = userInformationService.customers[0].EnterpriseCustomer;
	recordsLength=self.bankCustomers.length;
    console.log(self.bankCustomers);
    //var x=userInformationService.getCustomer(this.user);	
    return self.bankCustomers;
  }

  // for adding customers on scroll
  $scope.addItems = function addItems(isLastSet) {	     
	  if(isLastSet || $scope.numberOfItemsToDisplay>=recordsLength){		  
		  $scope.$broadcast('scroll.infiniteScrollComplete');
		  self.completedLoading=true;
		  self.completedLoadingMsg="No more clients to show";
	  } else {		  
		  $scope.numberOfItemsToDisplay+=$scope.numberOfItemsToDisplay;
		  if(recordsLength-$scope.numberOfItemsToDisplay<5)		  {
			   $scope.numberOfItemsToDisplay=recordsLength;
			   $scope.addItems("true");
		  }		  
	  }
	return self.bankCustomers;	 
  }  

  self.getCustomerFullName = function getCustomerFullName(cst) {
    return  (cst.EnterpriseIndNonIndInfo.EnterpriseIndInfo.IndName.FirstName + ' ' +
      cst.EnterpriseIndNonIndInfo.EnterpriseIndInfo.IndName.LastName);
  };

$scope.showPopup = function() {
      $scope.data = {};
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: 'Title',
         subTitle: 'Subtitle',
         scope: $scope,
      
         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Save</b>',
               type: 'button-positive',
                  onTap: function(e) {
            
                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }
                  }
            }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };

  $scope.customercount=0;

  $scope.displaycustomers = function displaycustomers() {
    $scope.customercount=0;

    $ionicModal.fromTemplateUrl('partials/client.html', {
      scope: $scope,
      animation: 'slide-in-up',
      hardwareBackButtonClose: true
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
    $scope.openModal = function openModal() {
      self.getCustomerData();

    };
    $scope.closeModal = function closeModal() {
      $scope.modal.hide();
    };
    
  }

  $interval(function() {
    angular.element(document.querySelector('.badge-assertive')).removeClass('hide');
    $scope.customercount = parseInt($scope.customercount) + 1;
  }, 15000);
 


 self.getCustomerData();
$scope.swiper = {}; //initialize
$scope.onReadySwiper = function (swiper)
{
  $scope.swiper = swiper; //update when the swiper is ready
};


}]);
angular.module('starter').controller('CustomerDetailsController',['$scope','$stateParams','userInformationService',function CustomerDetailsController($scope,$stateParams,userInformationService)
{
	$scope.customerId=$stateParams.id;
	$scope.getCustomerDetails = userInformationService.customers[0].EnterpriseCustomer;
	angular.forEach($scope.getCustomerDetails,function(customer){
		
		if($scope.customerId == customer.EnterpriseID){
			$scope.customerDetail = customer;
		}
   
	});
	var mask='XXXXX'+$scope.customerDetail.SSNTIN.slice(5);
	$scope.customerDetail.SSNTINMask=mask;
	$scope.getCustomerName = function (cst) {
    return  (cst.EnterpriseIndNonIndInfo.EnterpriseIndInfo.IndName.FirstName + ' ' +
      cst.EnterpriseIndNonIndInfo.EnterpriseIndInfo.IndName.LastName);
  };
  $scope.getCustomerAddress = function (cst) {
    return  (cst.Address.AddressLine1 + ' ' +','+ ' '+ cst.Address.City + ' ' +','+ ' '+ cst.Address.State.Code + ' ' +','+ ' '+ cst.Address.PostalArea + ' ' +','+ ' '+cst.Address.Country );
  };



    self.recentActivities = [];
    
    self.getCustomerActivities = function getCustomerActivities(cst) {
      self.recentActivities = cst.RecentActivities;
      
      return self.recentActivities;
   };

    self.getCustomerActivities($scope.customerDetail);
    
     self.recentActivities = [];
     self.getCustomerData = function getCustomerData() {
     self.bankCustomers = userInformationService.customers[0].EnterpriseCustomer;
     return self.bankCustomers;
  }
  $scope.toggleChange=function(){	 
     if($scope.mask){
		$scope.customerDetail.SSNTINMask=$scope.customerDetail.SSNTIN;	
	 } else{
		 $scope.customerDetail.SSNTINMask=mask;
	 }
  }

   $scope.formatCustomerActivities = function (cst) {

 
    return  (cst.taskDescription + ' ' +
      cst.Date);
  };

}		
]);
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
