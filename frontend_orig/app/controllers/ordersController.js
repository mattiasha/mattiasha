(function() {
  var OrdersController = function($scope, $routeParams, ordersFactory) {
    $scope.price = 0;
    $scope.myIp = '';

    function init() {
      $scope.price = ordersFactory.getOrders()[$routeParams.orderId].price;
    
      $scope.myIp = ordersFactory.getMyIp()
        .success(function(jsonip) {
          $scope.myIp = jsonip.ip;
        });
    }
    
    init();
  }

  OrdersController.$inject = ['$scope', '$routeParams', 'ordersFactory'];

  angular.module('customersApp')
    .controller('OrdersController', OrdersController);
}());