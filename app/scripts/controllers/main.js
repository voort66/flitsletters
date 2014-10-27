'use strict';

/** 
 * @ngdoc function
 * @name flitsLetters2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flitsLetters2App
 */
angular.module('flitsLetters2App') .controller('MainCtrl', function ($scope, Letterservice, Timespentservice, $interval) {
    $scope.currentLetter = Letterservice.getLetter().letter;

    $scope.delay = 3;

    $scope.letterAnimation = '';

    $scope.letterObjects = Letterservice.getAllLetters();

  	$scope.timeSpent = '00:00';

    var letterPromise;

    var timePromise;
    var time = 0;

   	$scope.nrOfLettersShown = 0;





    $scope.startFlitsen = function() {

    	if ($scope.isRunning() ) {
    		return;
    	} 



    	$scope.nrOfLettersShown = 0;

    	letterPromise = $interval(function(){
    		
    		var letterHolder = Letterservice.getLetter();
    		if(angular.isDefined(letterHolder)){
    			$scope.currentLetter = letterHolder.letter;
    			$scope.nrOfLettersShown++;
    		}
    		
    		
    	}, 1000 * $scope.delay);



    	timePromise = $interval(function() {
    		time++;
    		$scope.timeSpent = Timespentservice.timeSpentString(time);


    	}, 1000);


	};  



	$scope.stopFlitsen = function() {
		if($scope.isRunning()){
			$interval.cancel(letterPromise);
			letterPromise = undefined;
			$scope.letterAnimation='letterOut';
		}

		
		$interval.cancel(timePromise);
		timePromise = undefined;
		time = 0;
		



	};

	



	$scope.isRunning = function(){
		return angular.isDefined(letterPromise);
	};


		
	

	$scope.$watch('delay', function(){
    	
    	$scope.stopFlitsen();
    	$scope.startFlitsen();
    });

	
	$scope.$on('$destroy', function() {
      // Make sure that the interval is destroyed too
      $scope.stopFlitsen();
    });

    







  });
