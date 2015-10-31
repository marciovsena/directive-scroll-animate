'use strict';

angular.module('directives.scroll-animate', [])
  .directive('scroll-animate', function() {
    var directiveDefinitionObject = {
      link: function(scope, element, attrs) {
        angular.element("body").addClass("in-portals");

        angular.element(window).bind("scroll", function() {
          let scroll = window.scrollY;
          if(attrs.scrollAnimate == "toggle"){
            let selector = attrs.scrollAnimateToggleClass;
            if(scroll >= attrs.scrollAnimateInit){
              angular.element(element).hasClass(selector) ? "" : angular.element(element).addClass(selector);
              angular.element(element).addClass("scroll-animate-end");
            }else{
              angular.element(element).hasClass(selector) ? angular.element(element).removeClass(selector) : "";
              angular.element(element).removeClass("scroll-animate-end");
            }
          }else {
            let isUp = scroll > lastScroll ? true : false;
            lastScroll = scroll;
            let property = attrs.scrollAnimateProperty;
            let current = parseInt(angular.element(element).css(property), 10);
            let end = parseInt(attrs.scrollAnimatePropertyEnd, 10);
            let init = parseInt(attrs.scrollAnimatePropertyInit, 10);

            if(isUp) {
              if(scroll >= attrs.scrollAnimateInit){
                angular.element(element).css(property, end);
                angular.element(element).addClass("scroll-animate-end");
              }else {
                current - scroll > end ? angular.element(element).css(property, current - scroll) : angular.element(element).css(property, end);
              }
            }else{
              if(scroll <= attrs.scrollAnimateInit){
                let diff = attrs.scrollAnimateInit - scroll;
                if(scroll == 0){
                  angular.element(element).css(property, init);
                }else {
                  angular.element(element).removeClass("scroll-animate-end");
                  current + diff <= init ? angular.element(element).css(property, current + diff) : angular.element(element).css(property, init);
                }
              }
            }
          }
        });
      }
    };
    return directiveDefinitionObject;
  });
