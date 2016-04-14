// app.module.js
(function() {
    'use strict';

    angular
        .module('eligcalc', ['ionic', 
							 'blocks.router', 
							 'eligcalc.core', 
							 'eligcalc.controllers', 'eligcalc.profiles', 'eligcalc.calculator']);

})();