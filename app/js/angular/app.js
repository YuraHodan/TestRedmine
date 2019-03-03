var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'loginController'
		})
		.when('/list', {
			templateUrl: 'list.html',
			controller: 'listController'
		})
		.otherwise({
			redirectTo: '/login'
		});
});
