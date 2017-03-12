(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'components/item.template.html',
  bindings: {
    items: '<'
  }
});

})();
