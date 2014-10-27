'use strict';

/** 
 * @ngdoc service
 * @name flitsLetters2App.Letterservice
 * @description
 * # Letterservice
 * Service in the flitsLetters2App.
 */
angular.module('flitsLetters2App')
  .service('Letterservice', function Letterservice($log, $filter) {

  	var letters = [
  		{letter:'a',	available: true},
  		{letter:'b',	available: true},
  		{letter:'c',	available: true},
  		{letter:'d',	available: true},
  		{letter:'e',	available: true},
  		{letter:'f',	available: true},
  		{letter:'g',	available: true},
  		{letter:'h',	available: true},
  		{letter:'i',	available: true},
  		{letter:'j',	available: true},
  		{letter:'k',	available: true},
  		{letter:'l',	available: true},
  		{letter:'m',	available: true},
  		{letter:'n',	available: true},
  		{letter:'o',	available: true},
  		{letter:'p',	available: true},
  		{letter:'q',	available: true},
  		{letter:'r',	available: true},
  		{letter:'s',	available: true},
  		{letter:'t',	available: true},
  		{letter:'u',	available: true},
  		{letter:'v',	available: true},
  		{letter:'w',	available: true},
  		{letter:'x',	available: true},
  		{letter:'y',	available: true},
  		{letter:'z',	available: true},
  		{letter:'oe',	available: false},
  		{letter:'aa',	available: true},
  		{letter:'ee',	available: true},
  		{letter:'oo',	available: true},
  		{letter:'uu',	available: true},
  		{letter:'ie',	available: false},
  		{letter:'au',	available: false},
  		{letter:'ou',	available: false},
  		{letter:'ui',	available: false},
  		{letter:'ei',	available: false},
  		{letter:'ch',	available: false},
  		{letter:'sch',	available: false},
  		{letter:'eu',	available: false}];
  	

  	

     this.getLetter = function(){
     	var filteredLetters = $filter('letterFilter')(letters);	

     	var letterIndex = Math.floor(Math.random() * filteredLetters.length);
     	
     	return filteredLetters[letterIndex];
     	

     };

     this.getAllLetters = function() {
     	return letters;
     };
  });
