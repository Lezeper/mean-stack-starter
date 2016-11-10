(function(){
	app.controller('usermCtrl', ['$scope', 'meanData',
		'$state', function($scope, meanData, $state){
		
		meanData.getAllUsers().then(function(res){
			$scope.users = res.data;
		});

		$scope.deleteUser = function(id){
			if(confirm("Are you sure to delete?")){
				meanData.deleteUser(id).then(function(res){
					alert(res.data.message);
					$state.reload();
				});
			}
		}
	}])
})();