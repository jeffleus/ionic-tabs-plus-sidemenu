// profile-schools.ctrl.js
(function () {
    'use strict';
    var controllerId = 'ProfileSchoolsCtrl';

    angular
        .module('eligcalc.profiles')
        .controller(controllerId, profileSchools);

	profileSchools.$inject = ['$log'];
	
    function profileSchools($log) {
        /*jshint validthis: true*/
        var self = this;
        $log.log('Controller Init: ' + controllerId);
        self.student = {first:'Jeff', last:'Leininger'};
	}
})();