(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .directive('jrPartyForm', jrPartyForm);
    
    function jrPartyForm () {
        return {
            templateUrl: 'app/waitlist/directives/partyForm.html',
            restrict: 'E',
            controller: PartyFormController,
            controllerAs: 'vm',
            bindToController: true, //binds the scope to the controller, so we can access parties as vm.parties
            scope: {
                parties: '='
            }
        };
    }
    
    PartyFormController.$inject = ['partyService'];
    
    function PartyFormController(partyService) {
        var vm = this;
        
        vm.newParty = new partyService.Party();
        vm.addParty = addParty;
        
        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new partyService.Party();
        }


    }
})();