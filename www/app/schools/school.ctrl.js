// school.ctrl.js
(function () {
    'use strict';
    var controllerId = 'SchoolCtrl';
    
    angular
        .module('eligcalc.schools')
        .controller(controllerId, schoolController);

	schoolController.$inject = ['$log'];
	
    function schoolController($log) {
        /*jshint validthis: true*/
        var self = this;
        $log.log('Controller Init: ' + controllerId);
        //love this snippet...
	}
})();