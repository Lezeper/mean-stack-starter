(function(){
	app.controller("testCtrl", ["$scope", "meanData", 
		function($scope, meanData){

		$scope.getAllTest = function(){
			return new Promise(function(resolve, reject){
				meanData.getAllTest().then(function(res){
					resolve(res.data);
				}, function(err){
					alert(err.data.errmsg);
					reject();
				});
			})
		}

		$scope.getTestById = function(){
			return new Promise(function(resolve, reject){
				meanData.getTestById().then(function(res){
					resolve(res.data);
				}, function(err){
					alert(err.data.errmsg);
					reject();
				});
			})
		}

		$scope.createTest = function(test){
			return new Promise(function(resolve, reject){
				meanData.createTest(test).then(function(res){
					alert(res.data.message);
					resolve(res.data.id);
				}, function(err){
					alert(err.data.errmsg);
					reject(err.data.errmsg);
				});
			});
		}

		$scope.updateTest = function(test){
			return new Promise(function(resolve, reject){
				meanData.updateTest(test).then(function(res){
					alert(res.data.message);
					resolve();
				}, function(err){
					alert(err.data.errmsg);
					reject();
				});
			});
		}

		$scope.deleteTestById = function(id){
			return new Promise(function(resolve, reject){
				meanData.deleteTestById(id).then(function(res){
					alert(res.data.message);
					resolve();
				}, function(err){
					alert(err.data.errmsg);
					reject();
				});
			});
		}

	}]);
})();