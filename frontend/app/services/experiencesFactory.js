(function() {
  var experiencesFactory = function($resource) {
    return $resource(
      'http://www.local.gam.com/mattiasha_back/restapi/experiences',
      {}, // Query parameters
      {'query': { method: 'GET', isArray: false }}
    ); 
  }

  experiencesFactory.$inject = ['$resource'];

  angular.module('mattiashaApp')
    .factory('experiencesFactory', experiencesFactory);
}());