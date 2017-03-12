(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'components/category.template.html',
  bindings: {
    items: '<',
    onClick: '&'
  }
});

})();
