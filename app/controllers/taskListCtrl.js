"use strict";

app.controller('TaskListCtrl', function($scope, $routeParams, DataFactory, $location) {
  
  $scope.task = {
  	meal: "",
  	beverage: "",
  	date: "",
  	timeOfDay: "",
  	description: "",
  	isCompleted: "",
  	task: ""
  };

	DataFactory.getTask($routeParams.taskId)
	.then( ( stuff ) => {
		$scope.task = stuff;
		$scope.task.id = $routeParams.taskId;
	});

  $scope.submitTask = function() {
    // stuff goes here
    DataFactory.editTask($routeParams.taskId, $scope.task)
    .then( ( response ) => {
    	$location.path("/task-list");
    });
    console.log("task", $scope.task);
    console.log("You clicked the edit task button!");
  };
});