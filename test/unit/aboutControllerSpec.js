'use strict';

/* jasmine specs for controllers go here */
describe('AboutController', function(){

  beforeEach( angular.mock.module('wxPortal') );

  it('should create "phones" model with 3 phones', inject(function($controller) {
    var ctrl = $controller('AboutController');

    expect(ctrl.phones.length).toBe(3);
  }));

  it('should have the name "World" in its scope', inject(function($controller) {
    var ctrl = $controller('AboutController');

    expect(ctrl.name).toBe('World');
  }));

});