 var myNinjaApp = angular.module('myNinjaApp', []);

 //[function] means hold dependencies
 myNinjaApp.controller('NinjaController', ['$scope', function($scope){

     $scope.ninjas = [
         {
             name: "Yoshi",
             belt: "blue",
             rate: 1000,
             available: true
         },
         {
             name: "Crystal",
             belt: "red",
             rate: 50,
             available: true
         },
         {
             name: "Ryu",
             belt: "yellow",
             rate: 30,
             available: true
         },
         {
             name: "Ryan",
             belt: "green",
             rate: 10,
             available: false
         },
     ];

 }]);