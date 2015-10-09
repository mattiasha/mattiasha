(function() {

  app = angular.module('customersApp', ['ngRoute']);

  app.config(function($routeProvider) {
    // Routes
    $routeProvider
      .when('/',
        {
          controller: "CustomersController",
          templateUrl: 'app/views/customers.html'
        })
      .when('/orders/:orderId', {
        controller: "OrdersController",
        templateUrl: "app/views/orders.html"
      })
      .otherwise({redirectTo: "/"});
  });
}());
