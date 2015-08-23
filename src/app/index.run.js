(function() {
  'use strict';

  angular
    .module('portfolio2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
