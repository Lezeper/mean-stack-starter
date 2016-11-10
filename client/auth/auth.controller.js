(function () {
  app.controller('loginCtrl', ['$scope', 'authentication', 'meanData', 
      function ($scope, authentication, meanData) {

      $scope.error = false;

      $scope.login = function (user) {
        authentication.login(user)
          .error(function () {
            $scope.error = true;
          })
          .then(function () {
            window.location.href = "/";
          })
      };

      $scope.register = function (cUser) {
        meanData.createUser(cUser).success(function (res) {
          alert(res.message);
          window.location.href = "/";
        })
      };

    }])
})();