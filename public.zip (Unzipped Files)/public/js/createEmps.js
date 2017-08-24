angular.module('com.sqli.emps.createEmps',[])
       .controller('EmpsCreateCtrl',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){
          $scope.emp={};

          $scope.create = function(){

            $http.post('http://localhost:2403/emps/',$scope.emp).success(function(data){

                $location.path("/emps");
            });
          };

       }]);
