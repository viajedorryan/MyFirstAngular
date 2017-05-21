 var myHokageApp = angular.module('myHokageApp', []);

 //[function] means hold dependencies
 myHokageApp.controller('HokageController', ['$scope', function($scope){

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

     $scope.hokages = [
         {
             name: "Pacres",
             belt: "blue",
             rate: 1000,
             available: true,
             thumb: "content/img/picture1.png"
         },
         {
             name: "CEO Natsss",
             belt: "red",
             rate: 50,
             available: true,
             thumb: "content/img/picture1.png"
         },
         {
             name: "CR Manager",
             belt: "yellow",
             rate: 30,
             available: true,
             thumb: "content/img/picture1.png"
         },
         {
             name: "#KhenZone",
             belt: "green",
             rate: 10,
             available: true,
             thumb: "content/img/picture1.png"
         },
     ];

 }]);