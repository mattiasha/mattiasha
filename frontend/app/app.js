(function() {
	app = angular.module('mattiashaApp', 
        ['ngRoute', 'ngResource', 'ui.bootstrap', 'experienceDateFilter']);
        //, 'ngMock'

	app.config(function($routeProvider) {
		// Routes
		$routeProvider
			.when('/',
				{
					controller: "ExperiencesController",
					templateUrl: 'app/views/experiences.html'
				})
			.when('/experiences',
				{
					controller: "ExperiencesController",
					templateUrl: 'app/views/experiences.html'
				})
			.when('/about',
				{
					templateUrl: 'app/views/about.html'
				})
			.when('/contact',
				{
					templateUrl: 'app/views/contact.html'
				})
			.otherwise({redirectTo: "/"});
	});
}());
