(function() {
  var ordersFactory = function($http) {
    var orders = [{id:'1', price:'100'}, {id: '2', price: '200'}];

    var factory = {};
    factory.getOrders = function() {
      return orders;
    }

    factory.getMyIp = function() {
      return $http.get('http://ip.jsontest.com');
    }

    return factory;
  }

  ordersFactory.$inject = ['$http'];

  angular.module('customersApp')
    .factory('ordersFactory', ordersFactory);
}());