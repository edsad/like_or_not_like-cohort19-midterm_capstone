"use strict";

const app = angular.module('TodoApp', ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then((userExists) => {
		if(userExists){
			console.log("Authenticated, go ahead");
			resolve();
		}else {
			console.log("Authentication reject, go away");
			reject();
		}
	});
});

app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/login', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/logout', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/savedEdit', {
		templateUrl: 'partials/savedEdit.html',
		controller: 'SavedEditCtrl',
		resolve: {isAuth}
	})
	.when('/tasks/newtask', {
		templateUrl: 'partials/savedAll.html',
		controller: 'NewAddCtrl',
		resolve: {isAuth}
	})
	.when('/tasks/:taskId', {
		templateUrl: 'partials/newAdd.html',
		controller: 'SearchCtrl',
		resolve: {isAuth}
	})
	.when('/tasks/:taskId/edit', {
		templateUrl: 'partials/savedAll.html',
		controller: 'SavedEditCtrl',
		resolve: {isAuth}
	})
	.otherwise('/');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});