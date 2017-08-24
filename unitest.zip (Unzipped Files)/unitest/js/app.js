var myApp = angular.module('App',[]);

myApp.controller('Ctrl1',['$scope',function($scope){
        $scope.counter = 0;

        $scope.incrementCounter = function(){
          $scope.counter++;
        };

    }]);
