angular.module('myApp', []).controller('myController', function($scope, $http){
  this.test = "AnuglarJS Setup!";

  // $http.get('/test').then(function(res){
  //   this.test2 = res.data;
  // });
});
