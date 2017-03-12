(function(){
	'use strict';

	angular.module('data')
		.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];

	function MenuDataService($http){
		var service = this;

		var categories_url = 'https://davids-restaurant.herokuapp.com/categories.json',
			category_url = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=';

		service.getAllCategories = function(){
			return $http.get(categories_url).then(function(result){
				return result;
			});
		}

		service.ItemsForCategory = function(categoryShortName){
			var category_search = category_url+categoryShortName;
			return $http.get(category_search).then(function(result){
				return result.data;
			});
		}
	}
})();