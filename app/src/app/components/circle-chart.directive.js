/**
 * directive for drawing simple svg round pie-kind linechart with one sector
 * @example
 * <circle-chart ng-model="controller.number" min="-100" max="100"></circle-chart>
 */

(function() {
  'use strict';

  angular
    .module('portfolio2')
    .directive('circleChart', function(){
     return {
      restrict:'AE',
      bindToController:{
        value:'=ngModel',
        min:'=?',
        max:'=?',
        label:'='
      },
      scope:{},
      controller:CircleChartController,
      controllerAs:'chart',
      replace:true,
      template:
      '<div class="circle-chart"><svg><circle></circle><path></path></svg><label>{{chart.label}}</label></div>',
      link:function($scope, $element, $attrs, $controller){
        var el = $controller.element = $element[0];

        // for some reason, dynamically created svgs do not seem to work,
        // for now, the purkka-solution
        $controller.path = el.querySelector('path');
        $controller.background = el.querySelector('circle');

        $controller.draw();
      }
     };
    });

  /** @ngInject */
  function CircleChartController() {
    this.strokeWidth = 10;
    this.fill = 'none';
    this.arc = '';

    this.path = null;
    this.background = null;
  }

  CircleChartController.prototype.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  CircleChartController.prototype.describeArc = function (x, y, radius, startAngle, endAngle) {
    var start = this.polarToCartesian(x, y, radius, endAngle);
    var end = this.polarToCartesian(x, y, radius, startAngle);
    var arcSweep = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M', start.x, start.y,
        'A', radius, radius, 0, arcSweep, 0, end.x, end.y
    ].join(' ');

    return d;
  };


  CircleChartController.prototype.draw = function () {
    var min = this.min ? this.min : 0;
    var max = this.max ? this.max : 100;
    var range = max - min;
    var value = this.value / range;

    var endAngle = value > 1 ? 1 : value < 0 ? 0 : value;
    var startAngle = 0;

    var center = this.element.offsetWidth/2;
    var pathData = this.describeArc(center, center, center - this.strokeWidth, startAngle, endAngle * 360);

    this.path.setAttribute('fill', this.fill);
    this.path.setAttribute('stroke-width', this.strokeWidth);
    this.path.setAttribute('d', pathData );

    this.background.setAttribute('fill', 'transparent');
    this.background.setAttribute('stroke-width', this.strokeWidth);
    this.background.setAttribute('cx', center);
    this.background.setAttribute('cy', center);
    this.background.setAttribute('r', center - this.strokeWidth);
  };


})();
