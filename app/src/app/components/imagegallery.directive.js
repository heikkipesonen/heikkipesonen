(function() {
  'use strict';

  angular
    .module('portfolio2')
    .directive('imageGallery', function () {
    	return {
    		restrict: 'AE',
    		replace: true,
    		scope: {
    			images: '=ngModel'
        },
    		template:
        '<div class="image-gallery">' +
          '<div class="gallery-list">'+
            '<gallery-image ng-model="image" ng-repeat="(imageIndex, image) in images track by imageIndex"></gallery-image>' +
          '</div>'+
        '</div>'
    	};
    })

    .directive('galleryImage', function (){
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          image:'=ngModel'
        },
        template:
        '<div class="gallery-item">' +
          '<div class="gallery-item-image" image-loader="::image.thumbnail"></div>' +
          '<div class="gallery-item-content">' +
            '<h4 class="item-title" ng-bind="::image.title"></h4>' +
            '<p class="item-description"' +
              'ng-repeat="(paragraphIndex, paragraph) in ::image.description track by paragraphIndex"' +
              'ng-bind="::paragraph"></p>' +
            '<icon-tags ng-model="image.tags"></icon-tags>' +
          '</div>' +
        '</div>'
      };
    });

  })();