'use strict';

$(document).ready(function () {
    showContent();

    // scroll listener
    $(window).scroll(function() {
        showContent();
    });

    // scroll to project section
    $('#hero-button').click(function () {
        var container = $('body'), scrollTo = $('#projects');

        container.animate({
            scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - window.pageYOffset
        });
    })
});

var app = angular.module('app',[]);

app.controller('MainController', ['$scope', '$window', function($scope, $window) {
    
}]);

var showContent = function () {
    var aboutMe = document.getElementById('about-me');

    var elementFromTop = window.innerHeight - 100;
    animation.fadeInOnScroll(aboutMe);

    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
        animation.fadeInOnScroll(cards[i]);
    }
}

var hasClass = function (element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

// animation helper
// note: this will be moved to a common library eventually
var animation = (function () {
    var fadeIn = function (element) {
        var isIn = hasClass(element, 'fade-in');

        if (!isIn) {
            element.classList.add('fade-in');
            element.classList.remove('hidden');
        }
    }

    var fadeInOnScroll = function (element) {
        var elementFromTop = window.innerHeight - 100;

        if (element.getBoundingClientRect().top < elementFromTop) {
            fadeIn(element);
        }
    }

    var animationObject = {
        fadeIn: fadeIn,
        fadeInOnScroll: fadeInOnScroll
    }
    
    return animationObject;
})();
