(function(){ 'use strict';

	// ShoppingListController
    angular.module('ShoppingListApp.controller', ['ngStorage']);

    angular.module('ShoppingListApp.controller')
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$localStorage', '$window'];

    function ShoppingListController($localStorage, $window){
        
        // view model
        var vm = this;
        vm.title = 'My shopping list';
        vm.storage = $localStorage.$default({
            list: []
        });
        vm.errorText = '';
        vm.addItem = addItem;
        vm.removeItem = removeItem;
        vm.closeAlert = closeAlert;
        vm.reset = reset;
        
        /// Bindable members below

        // add new item to the shopping list
        function addItem(){
            if(!vm.newItem) return;
            
            if(vm.storage.list.indexOf(vm.newItem) == -1){
                vm.storage.list.push(vm.newItem);
                vm.newItem = '';
                vm.errorText = '';
            } else {
                vm.errorText = 'This item is already in the shopping list.';
            }    
        }
        
        // removes the item from the shopping list
        function removeItem(index){
            vm.errorText = '';
            vm.storage.list.splice(index, 1);
        }

        // reset the shopping list
        function reset(){
            
            var response = $window.confirm('Do you really want to clear the list?');
            
            if(response){
                vm.storage.list = [];
                vm.errorText = '';
            }
            return;
        }

        // close the error alert
        function closeAlert(){
            vm.errorText = '';
        }

    }

})();