var phonecatApp = angular.module('empsApp', [
  'ngRoute',
  'com.sqli.emps.editEmps',
  'com.sqli.emps.listEmps',
  'com.sqli.emps.createEmps',
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/emps', {
        templateUrl: 'views/emps-list.html',
        controller: 'EmpsListCtrl'
      }).
      when('/emps/detail:phoneId', {
        templateUrl: 'views/emps-detail.html',
        controller: 'EmpsDetailCtrl'
      }).
      when('/emps/create', {
        templateUrl: 'views/emps-create.html',
        controller: 'EmpsCreateCtrl'
      }).
      when('/emps/edit/:empId', {
        templateUrl: 'views/emps-edit.html',
        controller: 'EmpsEditCtrl'
      }).
      otherwise({
        redirectTo: '/emps'
      });
  }]);
