(function(){
	app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/home/home.view.html',
          controller: "homeCtrl"
        })
        .state('login', {
          url: '/login', // can't named "auth"
          templateUrl: "/auth/auth.view.html",
          controller: "loginCtrl"
        })
        .state('admin', {
          url: '/admin/',
          templateUrl: "/admin/admin.view.html",
          controller: "adminCtrl"
        })
        .state('admin.overviews', {
          url: 'overviews/',
          templateUrl: "/admin/overviews/overviews.view.html",
          controller: "overviewsCtrl"
        })
        .state('admin.userm', {
          url: 'userm/',
          templateUrl: "/admin/userm/userm.view.html",
          controller: "usermCtrl"
        })
        .state('admin.log', {
          url: 'log/',
          templateUrl: "/admin/log/log.view.html",
          controller: "logCtrl"
        })
        .state('admin.settings', {
          url: 'settings/',
          templateUrl: "/admin/settings/settings.view.html",
          controller: "settingsCtrl"
        });

        $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode(true);

  }]);
})();