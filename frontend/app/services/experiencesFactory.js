(function() {
  var experiencesFactory = function($http, $resource) {
    factory = {};
    
    factory.getResource = function() {
      // return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"}); 
      return $resource(
        'http://www.local.gam.com/mattiasha_back/restapi/experiences',
        {}, // Query parameters
        {'query': { method: 'GET', isArray: false }}
      ); 
    }

    return factory;
  }

  experiencesFactory.$inject = ['$http', '$resource'];

  angular.module('mattiashaApp')
    .factory('experiencesFactory', experiencesFactory);
}());