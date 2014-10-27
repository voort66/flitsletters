'use strict';

describe('Controller: LetterselectionCtrl', function () {

  // load the controller's module
  beforeEach(module('flitsLetters2App'));

  var  parentscope, mainscope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    parentscope = $rootScope.$new();

    $controller('MainCtrl', {
      $scope: parentscope

    });

    mainscope = parentscope.$new();

    $controller('LetterselectionCtrl', {
      $scope: mainscope
    });

  }));

 it('should toggle selection', function(){
  expect(mainscope.selected).toBe(false);
  expect(mainscope.selectedPrefix).toBe('Alles');
  mainscope.toggleSelect();
  mainscope.$apply();
  

  expect(mainscope.selected).toBe(true);
  expect(mainscope.selectedPrefix).toBe('Niets');

  mainscope.toggleSelect();
  mainscope.$apply();
  //log.info('selectie = ' + scope.selected);

  expect(mainscope.selected).toBe(false);
  expect(mainscope.selectedPrefix).toBe('Alles');
});

it('should update available field in letter defs', function(){
  
  mainscope.toggleSelect();
  mainscope.$apply();

  angular.forEach(mainscope.letterObjects, function(letterObject){
    expect(letterObject.available).toBe(true); 
  });

  mainscope.toggleSelect();
  mainscope.$apply();

  angular.forEach(mainscope.letterObjects, function(letterObject){
    expect(letterObject.available).toBe(false); 
  });

  
});
});
