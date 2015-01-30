(function() {
  'use strict';

  angular
    .module('wxPortal')
    .controller('AboutController', AboutController);

  AboutController.$inject = ['dataservice'];

  function AboutController( dataservice ) {

    dataservice.getSomething().then(function() {
      console.log('Got Something');
    });

    this.name = 'World';
    this.phones = [
      {name: 'Nexus S', snippet: 'Fast just got faster with Nexus S.'},
      {name: 'Motorola XOOM™ with Wi-Fi', snippet: 'The Next, Next Generation tablet.'},
      {name: 'MOTOROLA XOOM™', snippet: 'The Next, Next Generation tablet.'}
    ];
  }
})();
