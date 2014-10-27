'use strict';

/**
 * @ngdoc service
 * @name flitsLetters2App.Timespentservice
 * @description
 * # Timespentservice
 * Service in the flitsLetters2App.
 */
angular.module('flitsLetters2App')
  .service('Timespentservice', function Timespentservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.timeSpentString = function(timespent){
    	var minutes =  Math.floor(timespent/60);
    	var minutesString = minutes.toString();
    	if(minutes < 10){
    		minutesString = '0' + minutesString;
    	}

    	var seconds = timespent % 60;
    	var secondsString = seconds.toString();


    	if(seconds < 10){
    		secondsString = '0' + secondsString;
    	}

    	return minutesString + ':' + secondsString;

    };

  });
