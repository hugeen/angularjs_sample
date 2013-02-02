// Création du controller
function GitHubReposController($scope, $http) {
	
	// Initialisation du tableau répertoires
	$scope.repos = [];
	
	// On va chercher dans l'API github pour peupler le tableau
	$http.get('https://api.github.com/legacy/repos/search/onegameamonth').success(function(data) {
		$scope.repos = data.repositories;
	});

}