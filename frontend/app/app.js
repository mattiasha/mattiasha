(function() {

	app = angular.module('mattiashaApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

	app.config(function($routeProvider) {
		// Routes
		$routeProvider
			.when('/',
				{
					controller: "ExperiencesController",
					templateUrl: 'app/views/experiences.html'
				})
			.when('/about',
				{
					templateUrl: 'app/views/about.html'
				})
			.otherwise({redirectTo: "/"});
	});
}());
