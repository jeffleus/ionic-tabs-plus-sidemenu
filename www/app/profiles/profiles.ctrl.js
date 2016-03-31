// profiles.js
(function () {
    'use strict';
    var controllerId = 'ProfilesCtrl';
    
    angular
        .module('eligcalc.profiles')
        .controller(controllerId, Profiles);

	Profiles.$inject = ['$log'];
	
    function Profiles($log) {
        /*jshint validthis: true*/
        var self = this;
        $log.log('Controller Init: ' + controllerId);
        self.students = ['Leininger, Jeff', 'Park, Robert', 'Chen, David'];
	}
})();