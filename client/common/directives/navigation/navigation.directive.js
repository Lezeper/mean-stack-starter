(function () {
  angular.module('app').directive('navigation', function () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/navigation/navigation.view.html'
    }
  })
})();