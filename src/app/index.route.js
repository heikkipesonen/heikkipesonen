(function() {
  'use strict';

  angular
    .module('portfolio2')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('main.cv', {
        url: 'cv',
        templateUrl: 'app/cv/cv.html',
        controller: 'CvController',
        controllerAs: 'cv'
      })

      .state('main.pf', {
        url: 'portfolio',
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'PortfolioController',
        controllerAs: 'portfolio'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
