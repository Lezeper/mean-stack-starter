(function () {
  angular.module('app').controller('homeCtrl', ['$scope', 'meanData', function ($scope, meanData) {

    $scope.isLogin = false;
    
    $scope.register = function () {
      meanData.createUser($scope.user).success(function (res) {
        alert(res.data);
        window.location.href = "/";
      })
    }
  }]);
})();