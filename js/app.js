/* setup your angular app here */
var app = angular.module('F&V', []);

app.controller('mainCtrl', ['$scope', function($scope) {
  $scope.fruits = []
  $scope.veggies = []
  $scope.foods = fruits.concat(vegetables);

  $scope.moveLeft = function(idx) {
    console.log('You have opted to move this item one div to the left');
    console.log(idx);
    $scope.fruits.push($scope.foods[idx]);
    $scope.foods.splice(idx, 1);
  }

  $scope.moveRight = function(idx) {
    console.log('You have opted to move this item oine div to the right');
    console.log(idx);
    $scope.veggies.push($scope.foods[idx]);
    $scope.foods.splice(idx, 1);
  }

  $scope.moveBackLeft = function(idx) {
    console.log('You have opted to move this item one div to the left');
    console.log(idx);
    $scope.foods.push($scope.veggies[idx]);
    $scope.veggies.splice(idx, 1);
  }

  $scope.moveBackRight = function(idx) {
    console.log('You have opted to move this item oine div to the right');
    console.log(idx);
    $scope.foods.push($scope.fruits[idx]);
    $scope.fruits.splice(idx, 1);
    console.log(fruits);
    console.log(vegetables);
    console.log($scope.fruits.sort);

  // }

  // $scope.checkWin = function(idx) {
  //   console.log($scope.fruits.sort);

  };
}]);

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
