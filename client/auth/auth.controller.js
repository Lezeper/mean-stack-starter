(function () {
  app.controller('loginCtrl', ['$scope', 'authentication', 'meanData', 
      function ($scope, authentication, meanData) {

      $scope.error = false;

      $scope.login = function (user) {
        authentication.login(user)
          .then(function () {
            window.location.href = "/";
          }, function(){
            $scope.error = true;
          })
      };

      $scope.register = function (cUser) {
        meanData.createUser(cUser).then(function (res) {
          alert(res.message);
          window.location.href = "/";
        })
      };

    }])
})();