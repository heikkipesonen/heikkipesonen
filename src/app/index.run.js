(function() {
  'use strict';

  angular
    .module('portfolio2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state) {

    $rootScope.$on('$stateChangeSuccess', function () {
    	if ($state.current.name === 'main'){
    		$rootScope.subViewVisible = false;
    	} else {
    		$rootScope.subViewVisible = true;
    	}
    })
  }

})();
