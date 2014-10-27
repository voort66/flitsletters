'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('flitsLetters2App'));

  var MainCtrl,
    scope,
    interval, 
    log;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $interval, $log) {
    scope = $rootScope.$new();
    interval = $interval;
    log = $log;

    MainCtrl = $controller('MainCtrl', {
      $scope: scope, $interval: interval
    });
  }));

  afterEach(function () {
    scope.stopFlitsen();
  });

  it('scope should by default set the delay to 3 seconds', function () {
    expect(scope.delay).toBe(3);
  });

  it('the interval should produce a valid promise', function(){
    scope.startFlitsen();
    expect(scope.isRunning()).toBe(true);

  });

  it('should be possible to stop the interval', function(){
    scope.startFlitsen();
    scope.stopFlitsen();
    expect(scope.isRunning()).toBe(false);
    
  });

 

});
