(function () {
  angular.module('app').service('meanData', ['$http', function meanData($http) {

    var getAllUsers = function () {
      return $http.get('/api/user');
    };

    var getUserById = function (id) {
      return $http.get('/api/user/' + id);
    };

    var createUser = function (newUser) {
      return $http.post('/api/user', newUser);
    };

    var updateUser = function (updateUser) {
      return $http.put('/api/user', updateUser, {});
    };

    var deleteUser = function (id) {
      return $http.delete('/api/user?id=' + id, {});
    };

    return {
      getAllUsers: getAllUsers,
      createUser: createUser,
      updateUser: updateUser,
      deleteUser: deleteUser,
      getUserById: getUserById
    }
  }])
})();