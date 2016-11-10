(function(){
	app.controller('moduleCtrl', ['$scope', '$controller', 'meanData', '$state',
		function($scope, $controller, meanData, $state){
		
		$scope.getAllModuleModel = function(){
			meanData.getAllModuleModel().then(function(res){
				$scope.module_model = res.data;
			});
		}

		$scope.deleteModuleModel = function(id, moduleName){
			meanData.deleteModuleModelById(id, moduleName).then(function(res){
				alert(res.data.message);
				$state.reload();
			}, function(err){
				alert(err.data);
			});
		}

		var checkedFalse = function(mm, $scope){
			mm.checked=false;
			$scope.$digest();
		}

		/* Now only can check String, Date, Number and Array type */
		$scope.testModule = function(Module_Name, mm){
			var testModel = {};
			var testUpdateModel = {};
			mm.required_p.forEach(function(r){
				Object.keys(r).forEach(function(o){
					if(r[o] == "String"){
						testModel[o] = "Lewis";
						testUpdateModel[o] = "Lewis1";
					}
					if(r[o] == "Number"){
						testModel[o] = 123;
						testUpdateModel[o] = 1231;
					}
					if(r[o] == "Array"){
						testModel[o] = [{name: "Test"}];
						testUpdateModel[o] = [{name: "Test1"}];
					}
					if(r[o] == "Date"){
						testModel[o] = new Date();
						testUpdateModel[o] = new Date();
					}
					if(r[o] == "Boolean"){
						testModel[o] = true;
						testUpdateModel[o] = false;
					}
				});
			});

			var scope = $scope.$new();
			module_name = Module_Name.toLowerCase();
			$controller(module_name+'Ctrl', {$scope: scope});
			console.log(testModel);
			scope["create"+Module_Name](testModel).then(function(id){
				scope["getAll"+Module_Name]().then(function(data){
					if(data.length == 0)
						return checkedFalse(mm, $scope);
					scope["update"+Module_Name](testUpdateModel).then(function(){
						scope["get"+Module_Name+"ById"](id).then(function(data_){
								/*check update unfinished*/
							scope["delete"+Module_Name+"ById"](id).then(function(){
								mm.checked=true;
								$scope.$digest();
							}, function(err){checkedFalse(mm, $scope)});
						}, function(err){checkedFalse(mm, $scope)});
					}, function(err){checkedFalse(mm, $scope)});
				}, function(err){checkedFalse(mm, $scope)});
			}, function(err){checkedFalse(mm, $scope)});
		}
		
	}]);
})();