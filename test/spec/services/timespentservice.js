'use strict';

describe('Service: Timespentservice', function () {

  // load the service's module
  beforeEach(module('flitsLetters2App'));

  // instantiate service
  var Timespentservice;
  beforeEach(inject(function (_Timespentservice_) {
    Timespentservice = _Timespentservice_;
  }));

  it('should do something', function () {
    expect(!!Timespentservice).toBe(true);
  });

   it('should return a time string', function () {
      var timestring = Timespentservice.timeSpentString(100);
      expect(timestring).toBe('01:40');
  });

});
