var app = angular.module('app', ['ui.router']);
(function () {
  app.controller('footerCtrl', ['$scope', 'meanData', '$rootScope',
        function ($scope, meanData, $rootScope) {
    $scope.year = new Date().getFullYear();
    meanData.getSettings().then(function(res){
      if(res.data.length == 1){
        $rootScope.settings = res.data[0];
      }
    }); 
  }]);

  app.controller('mainCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.prismHighlight = function(){
      Prism.highlightAll();
    };

    $rootScope.tinymceUsage = {
	  setup: function(editor){
		  editor.on('keydown', function(event){
			 if(event.keyCode == 9){
				 if(event.shiftKey){
					 editor.execCommand('Outdent');
				 }else{
					 editor.execCommand('Indent');
				 }
				 event.preventDefault();
				 return false;
			 } 
		  });
	  },
      height: 250,
      plugins: 'link image codesample advlist code preview',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | codesample | link image',
      valid_elements : '*[*]'
    };
    $rootScope.$on('onFinishRepeat', function(evt){
      $scope.prismHighlight();
    });
    
  }]);

  app.directive('onFinishRepeat', ['$timeout', function($timeout){
    return {
      restrict: 'A',
      link: function(scope, element, attr){
        if(scope.$last === true){
          $timeout(function(){
            scope.$emit(attr.onFinishRepeat);
          });
        }
      }
    }
  }]);

  app.directive('subCatCounts', function(){
    return function(scope, element, attrs){
      if(scope.group == 'doc'){
        scope.meanData.getDocCountsByCategory(attrs.subCatCounts)
                          .then(function(result){
          element.html(result.data);
        });
      }
      if(scope.group == 'que'){
        scope.meanData.getQueCountsByCategory(attrs.subCatCounts)
                          .then(function(result){
          element.html(result.data);
        });
      }
    };
  });

  app.run(['$transitions', '$state', 'authentication', 
          function($transitions, $state, authentication){
    $transitions.onStart({}, function($transitions){

      if($transitions.$to().name.indexOf('admin') >= 0){
        if(!authentication.isLoggedIn())
          $state.go('login');
      }
      
    });
  }]);
})();