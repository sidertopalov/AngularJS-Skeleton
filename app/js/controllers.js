'use strict';

angular.module('myApp.controllers', [])

	.controller('HomeCtrl', ['$scope', function($scope) {
		$scope.home = "Hello World";
	}])

	.controller('FooterCtrl', ['$scope', function($scope){
		$scope.version = "0.1";
	}])

	.controller('TestCtrl',
		['$scope', function($scope){
			$scope.test = "Test";
		}]
	)
	