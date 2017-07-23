'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [ 
	'ngRoute', 
	'myApp.controllers',
	'myApp.directives',
	'myApp.filters',
	'myApp.services'
	]);

myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		// $locationProvider.hashPrefix('!');
		$routeProvider.when('/', {
			templateUrl: 'templates/home/home.html',
			controller: 'HomeCtrl'
		})
		
		$routeProvider.when('/test',{
			templateUrl: 'templates/test/test.html',
			controller: 'TestCtrl'
		});

		$routeProvider.otherwise({redirectTo: '/'});
	}]);
