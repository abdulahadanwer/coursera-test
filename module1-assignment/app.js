(function(){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = ['$scope'];

function LunchCheckController($scope){

  $scope.lunchItems = "";
  $scope.message = "";

  $scope.lunchCheck = function(){

    var items = $scope.lunchItems;
    $scope.message = determineMessage(items);

  };

  function determineMessage(itemsReceived){
      if(itemsReceived == "")
      return "Please enter data first";
    var itemsReceived = itemsReceived.split(',');
    if(itemsReceived.length > 3)
      return "Too much!";
    else
        return "Enjoy!";
  };

}


})();
