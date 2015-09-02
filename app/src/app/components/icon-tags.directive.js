(function() {
  'use strict';

  function SocialTagsController () {

  }


  angular
    .module('portfolio2')
    .directive('iconTags', function () {
    	return {
    		restrict:'AE',
    		replace:true,
    		scope:{},
    		bindToController:{
    			tags:'=ngModel'
    		},
    		controller: SocialTagsController,
    		controllerAs:'iconTags',
    		template:
    		'<div class="social-tags">'+
	    		'<div class="tag" ng-repeat="(tagIndex, tag) in iconTags.tags track by tagIndex">'+
	    			'<i class="ion-{{::tag}}"></i>'+
	    		'</div>'+
    		'</div>'
    	};
    });

  })();