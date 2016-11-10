(function(){
	app.controller('mgCtrl', ['$scope', 'meanData', 
		function($scope, meanData){
		$scope.number = 1;
		$scope.getNumber = function(num) {
		    return new Array(num);   
		}

		$scope.changeFUrl = function(mg) {
			mg.frontUrl = "/" + mg.moduleName.toLowerCase();
		}

		$scope.addProp = function(num){
			if(num < 0 && $scope.number <= 1)
				return;
			$scope.number = $scope.number + num;
		}
		
		$scope.doGenerate = function(mg){
			meanData.createModuleModel(mg).then(function(res){
				alert(res.data.message || res.data);
				window.location.href = "/admin/module/";
			}, function(err){
				alert(err.data);
			});
		}
	}]);
})();