(function() {
  var CustomersController = function($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;

    $scope.people = [{name:'John', adress:'ohoystreet 10'}, {name: 'Zeus', adress: 'Thorstreet 15'}];
  }

  CustomersController.$inject = ['$scope'];

  angular.module('customersApp')
    .controller('CustomersController', CustomersController);
}());