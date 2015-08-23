(function() {
  'use strict';

  angular
    .module('portfolio2')
    .config(config);

  /** @ngInject */
  function config($logProvider, RestangularProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    RestangularProvider.setBaseUrl('http://192.168.0.16/projects/portfolio2/wordpress/wp-json/wp/v2');

  }

})();
