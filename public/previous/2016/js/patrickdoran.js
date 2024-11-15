// PatrickDoran.com

// Thanks for viewing source and digging deeper. I wanted a
// project to learn MVC Javascript, which is why I used
// Angular here. Probably not best practice for a small
// portfolio site, but I gotta learn somehow.


// This JS page both defines the Angular app and its
// controllers - one for viewing all the content
// and another for looking at individual entries.

// We load the page content from a .json file, which
// serves as our poor man's clientside database.



var PatrickDoranPortfolioApp = angular.module('PatrickDoranPortfolioApp', ['ngRoute','PatrickDoranControllers','ngSanitize']);


// This is the URL routing piece.
PatrickDoranPortfolioApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  // when('/portfolio/:portfolioID', {
  when('/portfolio/:portfolioID', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/'
  });
  
  
}]);


// This handles loading the data for each controller
var PatrickDoranControllers = angular.module("PatrickDoranControllers", []);


// This controller is for the homepage project listing.
PatrickDoranControllers.controller("ListController", ['$scope','$http',
	function($scope, $http)
		{
			$http.get('json/patrick-doran-portfolio.json').success (function(data){
				$scope.portfolioVariable = data;
			});
		}]
);






// And this controller is for individual entries
PatrickDoranControllers.controller("DetailsController", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{
			$http.get('json/patrick-doran-portfolio.json').success (function(data){
				$scope.portfolioVariable = data;
				$scope.whichPortfolioEntry = $routeParams.portfolioID;



        // Controller piece that cycles between entries

			  /* Previous Button */
			  if($routeParams.portfolioID > 0)
					$scope.prevEntry = Number($routeParams.portfolioID)-1;
				else
					$scope.prevEntry = $scope.portfolioVariable.length-1;

          /* next button */
				if($routeParams.portfolioID < $scope.portfolioVariable.length-1)
					$scope.nextEntry = Number($routeParams.portfolioID)+1;
				else
					$scope.nextEntry = 0;


			});
		}]
);








/* Other exciting Javascript */

/* Load classie for the header animation */
/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );


/* Function for header animation */
  function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 320,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();






























// Loads portfolio content in PortfolioApp scope

/*
var PortfolioListing = angular.module('PortfolioApp', []);

PortfolioListing.controller('PortfolioCtrl', function($scope, $http) {
  $http.get('json/patrick-doran-portfolio.json')
       .then(function(res){
          $scope.entries = res.data;
        });
});

*/