// profile-transcripts.ctrl.js
(function () {
    'use strict';
    var controllerId = 'ProfileTranscriptsCtrl';

    angular
        .module('eligcalc.profiles')
        .controller(controllerId, profileTranscripts);

	profileTranscripts.$inject = ['$log'];
	
    function profileTranscripts($log) {
        /*jshint validthis: true*/
        var self = this;
        $log.log('Controller Init: ' + controllerId);
        self.student = {first:'Jeff', last:'Leininger'};
	}
})();