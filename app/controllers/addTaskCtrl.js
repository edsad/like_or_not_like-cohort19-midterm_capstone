"use strict";

app.controller('AddTaskCtrl', function($scope, DataFactory, $location, AuthFactory) {

let user = AuthFactory.getUser();

  $scope.task = {
    meal: "",
    timeOfDay: "",
    date: "",
    location: "",
    task: "",
    beverage: "",
    info: "",
    mealLiked: "",
    beverageLiked: "",
    img: "",
    uid: user
  };

  $scope.submitTask = function () {
    // stuff goes here
    console.log("$scope.task", $scope.task);
    DataFactory.addTask($scope.task)
    .then ( (data) => {
      $location.path("/task-list");
    });
  };

  $scope.mealChanged = function(obj){
    obj.mealLiked = !obj.mealLiked;
  }

  $scope.beverageChanged = function(obj){
    obj.beverageLiked = !obj.beverageLiked;
  }

});






