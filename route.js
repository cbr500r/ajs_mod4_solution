(function(){
	'use scrict';

	var app = angular.module('MenuApp');
	app.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'views/home.html'
		})

		.state('categories', {
			url: '/categories',
			templateUrl: 'views/categories.html',
			controller: 'CategoryController as categories'
		})

		.state('items', {
			url: '/items/{category}',
			templateUrl: 'views/items.html',
			controller: 'CategoryItemsController as categoryItems',
			resolve: {
		      category: ['$stateParams', 'MenuDataService',
		            function ($stateParams, MenuDataService) {
		              return MenuDataService.ItemsForCategory($stateParams.category);
		            }]
		    }
		});
	}
})();