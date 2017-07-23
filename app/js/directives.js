'use strict';

angular.module('myApp.directives', [])

	.directive('footer' , function(){
		return {
			restrict: 'A',
			templateUrl: 'templates/common/footer.html'
		};
	})
