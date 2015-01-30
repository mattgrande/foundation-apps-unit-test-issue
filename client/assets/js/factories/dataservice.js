(function() {
  'use strict';

  angular
    .module('wxPortal')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http'];

  function dataservice( $http ) {
    return {
      getSomething: getSomething
    };

    function getSomething() {
      return $http.get('https://app.socialbicycles.com/api')
        .then( getSomethingComplete )
        .catch( getSomethingFailed );

      function getSomethingComplete(response) {
        return response;
      }

      function getSomethingFailed(error) {
        console.log('ERROR', error);
      }
    }
  }

})();
