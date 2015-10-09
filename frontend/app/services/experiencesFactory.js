(function() {
  var experiencesFactory = function($http, $resource) {
    // console.log("resource::", $resource);
    var orders = [{id:'1', price:'100'}, {id: '2', price: '200'}];

    var factory = {};
    factory.getOrders = function() {
      return orders;
    }

    factory.getTest = function() {
      return 5;
    }

    factory.getMyIp = function() {
      return $http.get('http://ip.jsontest.com');
    }

    factory.getResource = function() {
      return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});  
    }

    return factory;
  }

  experiencesFactory.$inject = ['$http', '$resource'];

  angular.module('mattiashaApp')
    .factory('experiencesFactory', experiencesFactory);
}());