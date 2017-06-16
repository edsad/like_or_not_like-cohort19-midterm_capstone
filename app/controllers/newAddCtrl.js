"use strict";

app.controller('NewAddCtrl', function($scope, DataFactory, $location, AuthFactory) {

let user = AuthFactory.getUser();

  $scope.task = {
    meal: "",
    beverage: "",
    date: "",
  	isCompleted: false,
    location: "",
    task: "",
    timeOfDay: "",
    uid: user
  };

  $scope.submitTask = function () {
    // stuff goes here
    console.log("$scope.task", $scope.task);
    DataFactory.addTask($scope.task)
    .then ( (data) => {
    	$location.path("/savedAll");
    });
  };

});