(function() {
  'use strict';

  angular
    .module('portfolio2')
    .controller('CvController', CvController);

  /** @ngInject */
  function CvController($http) {
    var vm = this;
    vm.listItems = [];

    $http.get('assets/cv.json').then(function (response) {
    	vm.listItems = response.data.items;
    });


  }
})();
