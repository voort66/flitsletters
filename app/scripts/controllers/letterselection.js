'use strict';

/**
 * @ngdoc function
 * @name flitsLetters2App.controller:LetterselectionCtrl
 * @description
 * # LetterselectionCtrl
 * Controller of the flitsLetters2App
 */
angular.module('flitsLetters2App')
  .controller('LetterselectionCtrl', function ($scope, $log) {
    
    $scope.selected = false;
    $scope.selectedPrefix = 'Alles';

    $scope.toggleSelect = function(){
    	$scope.selected = !$scope.selected;
    	angular.forEach($scope.letterObjects, function(letterObject){
				letterObject.available = $scope.selected;
		}); 

    	
    	if($scope.selected){
    		$scope.selectedPrefix = 'Niets';
    	} else {
    		$scope.selectedPrefix = 'Alles';
    	}
    };


    


  });
