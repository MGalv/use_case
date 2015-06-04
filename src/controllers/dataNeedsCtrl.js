var controller = angular.module('dataNeedsCtrl', []);

controller.controller('dataNeedsCtrl', ['$scope', function($scope){
  var maxLength = 140;
  $scope.summary = '';
  $scope.send = true;
  $scope.placeholder = 'Describe you data goals in a short summary';

  $scope.$watch('summary', function(){

    if ($scope.summary.length > maxLength){
      $scope.send = true;
      $scope.error = true;
      return
    }else{
      $scope.error = false;
    }

    if ($scope.summary.length == 0){
      $scope.send = true;
    }else{
      $scope.send = false;
    }
  });

  $scope.inputChanged = function(element){
    if (element.files && element.files[0]) {
      $scope.fileName = element.files[0].name;
      var reader = new FileReader();
      reader.onload = imageIsLoaded;
      reader.readAsDataURL(element.files[0]);
      delete element.files[0];
    }
  };

  function imageIsLoaded(e) {
    $scope.fileSrc = e.target.result;
    $scope.$digest();
  };

  $scope.sendForm = function(){
    $scope.summary = '';
    $scope.fileSrc = '';
    $scope.fileName = '';
    $scope.send = true;
    $scope.success = true;

    if ($scope.error){
      $scope.success = false;
      // Do something!
    }
  }
}]);
