// transcript.routes.js
(function () {
    'use strict';
    var controllerId = 'TranscriptRoutes';
    
    angular
        .module('eligcalc.transcript')
        .run(appRun);

	appRun.$inject = ['routerHelper'];
	
    function appRun(routerHelper) {
        routerHelper.configureStates( getStates() );
	}
	
	function getStates() {
		return [
// ***************************************
//  Abstract Tab Container - Transcript
// ***************************************
			{
				state: 'app.transcript',
				config: {
					url: "/transcript/:tid",
					views: {
					  'menu-content': {
						abstract: true,
						templateUrl: "app/transcript/transcript.html",
						controller: 'TranscriptCtrl as vm'
					  }
					}
				}
			},
//  Summary Tab
      		{
				state: 'app.transcript.summary',
				config: {
					url: "/summary",
					views: {
					  'tab-summary': {
						templateUrl: "app/transcript/summary/transcript-summary.html",
						controller: 'TranscriptSummaryCtrl as vm'
					  }
					}
				}
			},
//  Courses Tab
			{
				state: 'app.transcript.courses',
				config: {
					url: "/courses",
					views: {
					  'tab-courses': {
						templateUrl: "app/transcript/courses/transcript-courses.html",
						controller: 'TranscriptCoursesCtrl as vm'
					  }
					}
				  }
			},
//  Progress Tab
			{
				state: 'app.transcript.progress',
				config: {
					url: "/progress",
					views: {
					  'tab-progress': {
						templateUrl: "app/transcript/progress/transcript-progress.html",
						controller: 'TranscriptProgressCtrl as vm'
					  }
					}
				  }
			},
//  Images Tab
			{
				state: 'app.transcript.images',
				config: {
					url: "/images",
					views: {
					  'tab-images': {
						templateUrl: "app/transcript/images/transcript-images.html",
						controller: 'TranscriptImagesCtrl as vm'
					  }
					}
			  	}
			}
		];
	}
})();