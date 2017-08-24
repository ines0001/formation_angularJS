angular.module('com.sqli.emps.listEmps',[])
       .controller('EmpsListCtrl',['$scope','$http',function($scope,$http){
          $http.get('http://localhost:2403/emps').success(function(data){
            $scope.emps = data;
          });


       }]);
