 var myHokageApp = angular.module('myHokageApp', ['ngRoute']);

 myHokageApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

      $routeProvider
          .when('/home', {
              templateUrl: 'views/home.html',
              controller: 'HokageController'
          })
          .when('/directory', {
              templateUrl: 'views/directory.html',
              controller: 'HokageController'
          }).otherwise({
              redirectTo: '/home'
          });

 }]);

  myHokageApp.directive('randomHokage', [function(){
    return {
      restrict: 'E',
      scope: {
        hokages: '=',
        title: '='
      },
      templateUrl: 'views/random.html',
      controller: function($scope){
        $scope.random = Math.floor(Math.random() * 4);
      }
    };
  }]); 

  //[function] means hold dependencies
  myHokageApp.controller('HokageController', ['$scope', '$http', function($scope, $http){

     $scope.removeHokage = function(hokage){
         var removedHokage = $scope.hokages.indexOf(hokage);
         $scope.hokages.splice(removedHokage, 1);
     };

     $scope.addHokage = function(){
         $scope.hokages.push({
             name: $scope.newhokage.name,
             belt: $scope.newhokage.belt,
             rate: parseInt($scope.newhokage.rate),
             available: true
         });
         $scope.newhokage.name = "";
         $scope.newhokage.belt = "";
         $scope.newhokage.rate = "";
     };

     $http.get('data/hokages.json').success(function(data){
        $scope.hokages = data;
     });

 }]);