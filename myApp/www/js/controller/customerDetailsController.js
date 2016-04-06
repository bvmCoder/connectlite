angular.module('starter')
.controller('CustomerDetailsController',['$scope','$stateParams','userInformationService',function CustomerDetailsController($scope,$stateParams,userInformationService){ 
	var self = this;

	
	console.log($scope.selectedCustomer);
	console.log($scope.selectedCustomer.enterpriseCustomerProspect.enterpriseCustomer);
	$scope.customerDetail = $scope.selectedCustomer.enterpriseCustomerProspect.enterpriseCustomer;
	
	/*$scope.customerId=$stateParams.id;
	$scope.getCustomerDetails = userInformationService.customers[0].EnterpriseCustomer;
	angular.forEach($scope.getCustomerDetails,function(customer){
		
		if($scope.customerId == customer.EnterpriseID){
			$scope.customerDetail = customer;
		}
   
	});*/
	var mask='XXXXX'+$scope.customerDetail.ssntin.value.slice(5);
	$scope.customerDetail.SSNTINMask=mask;
	$scope.getCustomerName = function (cst) {
		return  (cst.enterpriseIndNonIndInfo.enterpriseIndInfo.indName.firstName + ' ' +
			cst.enterpriseIndNonIndInfo.enterpriseIndInfo.indName.lastName);
	};  

  //self.recentActivities = [];
  
  self.recentActivities = [{
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
  }];

   /* self.getCustomerActivities = function getCustomerActivities(cst) {
      self.recentActivities = cst.RecentActivities;
      
      return self.recentActivities;
   };

    self.getCustomerActivities($scope.customerDetail);
    */  
    self.getCustomerData = function getCustomerData() {
    	self.bankCustomers = userInformationService.customers[0].EnterpriseCustomer;
    	return self.bankCustomers;
    }
    $scope.toggleChange=function(){	 
    	if($scope.mask){
    		$scope.customerDetail.SSNTINMask=$scope.customerDetail.ssntin.value;	
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
