(function () {
  angular.module('app').service('authentication', ['$http', '$window', 'meanData', function ($http, $window, meanData) {

    var saveToken = function (token) {
      $window.localStorage['mean-token'] = token;
    };

    var getToken = function () {
      return $window.localStorage['mean-token'];
    };

    var isLoggedIn = function () {
      var token = getToken();
      var payload;

      if(token){
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
      }else{
        return false;
      }
    };

    var currentUser = function() {
      if(isLoggedIn()){
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        
        return {
          _id : payload._id
        };
      }
    };

    var login = function (user) {
      return $http.post('/api/login', user).success(function (data) {
        saveToken(data.token);
      })
    };

    var logout = function () {
      $window.localStorage.removeItem('mean-token');
    };

    return {
      login: login,
      isLoggedIn: isLoggedIn,
      currentUser: currentUser,
      logout: logout
    }

  }])
  
})();