(function () {
  angular.module('app')
    .controller('loginCtrl', ['$scope', 'authentication', function ($scope, authentication) {

      $scope.error = false;

      $scope.login = function () {
        authentication.login($scope.user)
          .error(function () {
            $scope.error = true;
          })
          .then(function () {
            window.location.href = "/";
          })
      };

    }])
})();