(function() {
  'use strict';

  angular
    .module('portfolio2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $rootScope) {
    var vm = this;
console.log($rootScope.subViewVisible)
  }
})();
