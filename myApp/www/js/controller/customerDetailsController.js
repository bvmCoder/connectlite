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
