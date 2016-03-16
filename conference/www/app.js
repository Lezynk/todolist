(function() {
    'use strict';
    
    angular
        .module('TodoList', [
            'ionic',
            'lists',
            'todos'
        ])
        .run(run)
        .config(config)
    ;
    
    run.$inject = ['$ionicPlatform'];
    
    function run($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }
    
    config.$inject = ['$stateProvider','$urlRouterProvider'];
        
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todolist', {
                url: '',
                abstract: true
            });
        $urlRouterProvider.otherwise('/lists');
    }

})();