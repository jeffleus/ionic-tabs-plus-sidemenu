// transcript.js
(function () {
    'use strict';
    var controllerId = 'TranscriptCtrl';

    angular
        .module('eligcalc.transcript')
        .controller(controllerId, Transcript);

	Transcript.$inject = ['$log'];
	
    function Transcript($log) {
        /*jshint validthis: true*/
        var self = this;
        $log.log('Controller Init: ' + controllerId);
	}
})();