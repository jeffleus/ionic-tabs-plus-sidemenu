// profile-details.ctrl.js
(function () {
    'use strict';
    var controllerId = 'ProfileDetailsCtrl';

    angular
        .module('eligcalc.profiles')
        .controller(controllerId, profileDetails);

	profileDetails.$inject = ['$log'];
	
    function profileDetails($log) {
        /*jshint validthis: true*/
        var self = this;
        $log.log('Controller Init: ' + controllerId);
        self.student = {first:'Jeff', last:'Leininger'};
	}
})();