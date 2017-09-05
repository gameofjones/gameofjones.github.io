'use strict';

$(document).ready(function () {

    // scroll listener
    $(window).scroll(function() {
        
        // listen to when project section comes into view
        var aboutMe = document.getElementById('about-me');

        // todo: find a better way to get this number dynamically for component library
        if (aboutMe.getBoundingClientRect().top < 820)
        {
            fadeIn(aboutMe);
        }

        // listen to when project section comes into view
        var cards = document.getElementById('cards');

        if (cards.getBoundingClientRect().top < 805)
        {
            fadeIn(cards);
        }
	    
    });

    // scroll to project section
    $('#hero-button').click(function (){
        var container = $('body'), scrollTo = $('#projects');

        container.animate({
            scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - window.pageYOffset
        });
    })
});

var app = angular.module('app',[]);

app.controller('MainController', ['$scope', '$window', function($scope, $window) {
    
}]);

var hasClass = function (element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

var fadeIn = function (element) {
    var isIn = hasClass(element, 'fade-in');

    if(!isIn)
    {
        element.className += ' fade-in';
    }
}