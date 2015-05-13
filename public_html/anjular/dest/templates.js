angular.module('account').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('teste.html',
    "<div>Testando</div>"
  );

}]);
