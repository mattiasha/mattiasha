(function() {
  var ExperiencesController = function($scope, experiencesFactory) {
    // console.log(experiencesFactory);
    $scope.exp1 = 'Axis';
    $scope.exp2 = 'ESAB';
    $scope.exp3 = experiencesFactory.getMyIp();
    $scope.users = experiencesFactory.getResource().query();
    // console.log(experiencesFactory.getResource().get({user: 1}));

    experiencesFactory.getMyIp()
      .success(function(jsonip) {
        $scope.myIp = jsonip.ip;
      });

    $scope.people = [{name:'John', adress:'ohoystreet 10'}, {name: 'Zeus', adress: 'Thorstreet 15'}];
  }

  ExperiencesController.$inject = ['$scope', 'experiencesFactory'];

  angular.module('mattiashaApp')
    .controller('ExperiencesController', ExperiencesController);
}());