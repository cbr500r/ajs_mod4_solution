(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);


CategoryItemsController.$inject = ['category'];
function CategoryItemsController(category) {
  var categoryItems = this;

  categoryItems.name = category.category.name;
  categoryItems.items = category.menu_items;  
}

})();
