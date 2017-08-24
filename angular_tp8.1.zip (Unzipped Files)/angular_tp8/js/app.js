angular.module("tp8App",[])
  .controller("Ctrl1",['$scope',function($scope){
      $scope.Name = 'TP9';
  }])
  .directive('sqliDemo',function(){

    return {
      scope:{
        localName:"@theName",
      },
      templateUrl:"sqli-demo.html",
      link:function(scope,element,attrs){
        scope.Name = scope.Name +' from directive';
      },
    }
  });
