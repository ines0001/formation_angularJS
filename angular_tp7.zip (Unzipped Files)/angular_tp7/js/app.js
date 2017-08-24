var myApp = angular.module('tp7App',[]);

myApp.controller("Ctrl1",['$scope','$q',function($scope,$q){

  $scope.message = 'opération en cours...';
  $scope.doClick = function(){
      var p = getItem(1);
      p.then(function(msg){
          $scope.message ='promise ok '+msg;
      })
  };

  var getItem = function(id){
    var d  = $q.defer();
    console.log('start:'+id);
    setTimeout(function(){
        $scope.$apply(function(){
          $scope.message ='ok'+id;
          console.log('end:'+id);
          d.resolve('end:'+id);
        });

    },2000);

    return d.promise;
  };
}]);
