(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);


CategoryController.$inject = ['MenuDataService'];
function CategoryController(MenuDataService) {
  var categories = this;
  categories.items = [];

  categories.$onInit = function () {
    MenuDataService.getAllCategories()
    .then(function (result) {
      categories.items = result.data;
    });
  };
}

})();
