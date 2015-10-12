(function() {

	var experienceDateFilterModule = angular.module('experienceDateFilter', [])

	var experienceDateFilter = function() {
		return function(fullDate) {
			return fullDate.substring(0, 11);
		};
	};

	experienceDateFilterModule.filter('experienceDate', experienceDateFilter);
}());