// profile-tests.ctrl.js
(function () {
    'use strict';
    var controllerId = 'ProfileTestsCtrl';

    angular
        .module('eligcalc.profiles')
        .controller(controllerId, profileTets);

	profileTets.$inject = ['$log'];
	
    function profileTets($log) {
        /*jshint validthis: true*/
        var self = this;
        $log.log('Controller Init: ' + controllerId);
        self.student = {first:'Jeff', last:'Leininger'};
	}
})();