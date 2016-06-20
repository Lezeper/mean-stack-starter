(function () {
  angular.module('app').controller('homeCtrl', ['$scope', 'meanData', 'authentication',
    function ($scope, meanData, authentication) {

      $scope.isLogin = authentication.isLoggedIn();

      if(authentication.currentUser()){
        meanData.getUserById(authentication.currentUser()._id).success(function (data) {
          $scope.currentUser = data;
        });
      }


      $scope.register = function () {
        meanData.createUser($scope.user).success(function (res) {
          alert(res.message);
          window.location.href = "/";
        })
      };

      $scope.updateUser = function () {
        meanData.updateUser($scope.currentUser).success(function (res) {
          alert(res.message);
          window.location.href = "/";
        })
      };

      $scope.logout = function () {
        authentication.logout();
        window.location.href = "/";
      }
    }]);
})();