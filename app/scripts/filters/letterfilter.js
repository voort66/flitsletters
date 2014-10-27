'use strict';

/**
 * @ngdoc filter
 * @name flitsLetters2App.filter:letterFilter
 * @function
 * @description
 * # letterFilter
 * Filter in the flitsLetters2App.
 */
angular.module('flitsLetters2App')
  .filter('letterFilter', function () {
    return function (input) {
      var filteredLetters = [];
      angular.forEach(input, function(letterObj){
      	if(letterObj.available){
      		filteredLetters.push(letterObj);
      	}
      });
      return filteredLetters;
    };
  });
