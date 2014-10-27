'use strict';

describe('Service: Letterservice', function () {

  // load the service's module
  beforeEach(module('flitsLetters2App'));

  // instantiate service
  var Letterservice;
  var LOG;
  beforeEach(inject(function (_Letterservice_, $log) {
    Letterservice = _Letterservice_;
    LOG = $log;
  }));

  it('should do something', function () {
    expect(!!Letterservice).toBe(true);
  });

  it('should return a character', function(){
    var charStr = Letterservice.getLetter();
    LOG.info('char string = ' + charStr);
    expect(charStr).toBeDefined();
  });

});
