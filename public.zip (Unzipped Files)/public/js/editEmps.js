angular.module('com.sqli.emps.editEmps',[])
       .controller('EmpsEditCtrl',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){
          var id=$routeParams.empId;
          $http.get('http://localhost:2403/emps/'+id).success(function(data){
            $scope.emp = data;
          });
          $scope.update = function(){

            $http.put('http://localhost:2403/emps/'+$scope.emp.id,$scope.emp).success(function(data){
                console.log(data);
                $location.path("/emps");
            });
          };
       }]);
