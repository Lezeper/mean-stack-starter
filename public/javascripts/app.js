angular.module('myApp', []).controller('myController', function($http){
  this.test = "AnuglarJS Setup!";

  $http.get('/test').then((res) => {
    this.test2 = res.data;
  });
});
