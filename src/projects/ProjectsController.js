(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['$stateParams', '$state'];

    /* @ngInject */
    function ProjectsController($stateParams, $state) {
        var vm = this;
        vm.title = 'ProjectsController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();