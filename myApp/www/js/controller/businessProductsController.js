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
