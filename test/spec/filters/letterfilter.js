'use strict';

describe('Filter: letterFilter', function () {

  // load the filter's module
  beforeEach(module('flitsLetters2App'));

  // initialize a new instance of the filter before each test
  var letterFilter;
  var filterInput;
  beforeEach(inject(function ($filter) {
    letterFilter = $filter('letterFilter');

    filterInput =  [
      {letter:'a',  available: false},
      {letter:'b',  available: true},
      {letter:'c',  available: false},
      {letter:'d',  available: true}];

  }));

  it('should return the 2 available letters: b and d', function () {
    var filteredInput = letterFilter(filterInput);

    expect(filteredInput).toBeDefined();
    expect(filteredInput.length).toBe(2);
    expect(filteredInput[0].letter).toBe('b');
  });

});
