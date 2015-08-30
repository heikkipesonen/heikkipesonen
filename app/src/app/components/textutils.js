(function(){
	'use strict';

	angular
		.module('textUtils', [])
		.directive('textFit', function($window){
			return {
				restrict:'AE',
				link:function($scope, $element){

					function fitTexts () {
						$element.css('font-size','');

						var scale = $element[0].parentNode.offsetWidth / $element[0].offsetWidth;
						var fontSize = parseInt( window.getComputedStyle ( $element[0] ).fontSize );

						$element.css('font-size', Math.floor( fontSize * scale ) + 'px' );
					}


					fitTexts();

					$window.addEventListener('resize', function () {
						console.log('pere');
						fitTexts();
					});
				}
			};
		});

})();