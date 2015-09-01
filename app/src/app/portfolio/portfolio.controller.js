(function() {
  'use strict';

  angular
    .module('portfolio2')
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function PortfolioController ($http) {
    var vm = this;
    vm.gallery = [];
    vm.tags = [];

    $http.get('assets/portfolio/portfolio.json').then(function (response) {
      vm.gallery = response.data;
      vm.tags = _.chain(vm.gallery).pluck('tags').flatten().uniq().value();
      console.log(vm.tags);
    });
  }
})();
