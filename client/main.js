(function () {
  angular.module('app', ['ngRoute']).config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/test/test.view.html',
          controller: "testCtrl"
        })
        .when('/login', {
          templateUrl: "/auth/auth.view.html",
          controller: "loginCtrl"
        })
        .otherwise({redirectTo: '/'});

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }]).controller('footerCtrl', ['$scope', function ($scope) {
    $scope.year = new Date().getFullYear();
  }])
})();