(function() {
  'use strict';

  angular
    .module('portfolio2')
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function PortfolioController ($http) {
    var vm = this;
    vm.gallery = [];

    $http.get('assets/portfolio/portfolio.json').then(function (response) {
      vm.gallery = response.data;
    });
  }
})();
