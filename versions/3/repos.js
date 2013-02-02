// Création du controller
function GitHubReposController($scope, $http) {
	
	// Initialisation du tableau répertoires
	$scope.repos = [];
	$scope.keyword = "onegameamonth";
	
	$scope.search = function() {
		// On va chercher dans l'API github pour peupler le tableau
		$http.get('https://api.github.com/legacy/repos/search/'+$scope.keyword).success(function(data) {
			$scope.repos = data.repositories;
		});
	};
	
	$scope.search();
	
	$scope.sort = 'name';
}