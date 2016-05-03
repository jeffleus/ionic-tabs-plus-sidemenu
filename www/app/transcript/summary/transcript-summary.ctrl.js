// transcript-summary.ctrl.js
(function () {
    'use strict';
    var controllerId = 'TranscriptSummaryCtrl';

    angular
        .module('eligcalc.transcript')
        .controller(controllerId, transcriptSummary);

	transcriptSummary.$inject = ['$log'];
	
    function transcriptSummary($log) {
        /*jshint validthis: true*/
        var self = this;
        $log.log('Controller Init: ' + controllerId);
        self.student = {first:'Jeff', last:'Leininger'};
	}
})();