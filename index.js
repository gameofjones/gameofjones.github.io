'use strict';

var app = angular.module('app',[]);

app.controller('MainController', ['$scope', '$window', function($scope, $window) {
    $scope.logResize = function () {
        // why is this needed for directive?
    };

    angular.element($window).on('resize', function () {
        console.log($window.innerWidth);
        resizeCards();
    });

    var resizeCards = function() {
       /* var heightArray = [$('#card-1').height(), $('#card-2').height(), $('#card-3').height()]
        var maxHeight = Math.max.apply(null, heightArray)

        var widthArray = [$('#card-1').width(), $('#card-2').width(), $('#card-3').width()]
        var minWidth = Math.min.apply(null, widthArray)

        $('.card').height(maxHeight)
        $('.card').width(minWidth)*/
    }

    resizeCards();
}]);

app.directive('cardResize', ['$window', function ($window) {

     return {
        link: link,
        restrict: 'E'            
     };

     function link(scope, element, attrs){

       angular.element($window).bind('resize', function(){
            var array = [$('#card-1').height(), $('#card-2').height(), $('#card-3').height()]
            var maxHeight = Math.max.apply(null, array)
            $('.card').height(maxHeight)
       });    
     }    
 }]);