'use strict';


describe('ShoppingListController', function(){

	var $controller, $scope, ctrl, confirmTrueMock;

	beforeEach( module('ShoppingListApp.controller') );

	beforeEach(function(){
		confirmTrueMock = { confirm: function(){ return true; } };		

		module(function($provide) {
			$provide.value('$window', confirmTrueMock);
		});
	});

	beforeEach(inject(function(_$controller_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));

	beforeEach(function(){
		$scope = {};
		ctrl = $controller('ShoppingListController', { $scope: $scope });
		ctrl.storage.list = [];
	});


	describe('initial controller state', function(){

		it('controller should be created', function(){
			expect(ctrl).toEqual( jasmine.any(Object) );
		});

		it('title should be set correctly', function(){
			expect(ctrl.title).toBe('My shopping list');
		});

		it('error message should not be set', function(){
			expect(ctrl.errorText).toBe('');
		});

		it('list storage should be created', function(){
			expect(ctrl.storage.list).toEqual( jasmine.any(Array) );
		});

	});


	describe('addItem', function(){

		it('should not add new item if item is not set', function(){
			ctrl.newItem = '';
			ctrl.addItem();
			expect(ctrl.storage.list.length).toBe(0);
		});


		it('should add new item to the list', function(){

			ctrl.newItem = 'New item';
			ctrl.addItem();
			ctrl.newItem = 'New item 2';
			ctrl.addItem();
			ctrl.newItem = 'New item 3';
			ctrl.addItem();

			expect(ctrl.storage.list.length).toBe(3);
			expect(ctrl.storage.list[0]).toBe('New item')
			expect(ctrl.storage.list.slice(-1)[0]).toBe('New item 3');
		});


		it('should not add the same item twice', function(){

			ctrl.newItem = 'New item 1';
			ctrl.addItem();
			ctrl.newItem = 'New item 2';
			ctrl.addItem();
			ctrl.newItem = 'New item 2';
			ctrl.addItem();

			expect(ctrl.storage.list.length).toBe(2);
			expect(ctrl.errorText).toBeTruthy();
		});

	});


	describe('removeItem', function(){

		it('should remove item if item exists', function(){

			ctrl.newItem = 'New item 1';
			ctrl.addItem();
			ctrl.newItem = 'New item 2';
			ctrl.addItem();
			ctrl.newItem = 'New item 3';
			ctrl.addItem();
			
			expect(ctrl.storage.list).toEqual(['New item 1', 'New item 2', 'New item 3']);

			ctrl.removeItem(0);
			expect(ctrl.storage.list).toEqual(['New item 2', 'New item 3']);

			ctrl.removeItem(1);
			expect(ctrl.storage.list).toEqual(['New item 2']);

		});

		it('should not change the list state if item does not exist', function(){

			ctrl.newItem = 'New item 1';
			ctrl.addItem();
			ctrl.newItem = 'New item 2';
			ctrl.addItem();
			ctrl.newItem = 'New item 3';
			ctrl.addItem();

			expect(ctrl.storage.list).toEqual(['New item 1', 'New item 2', 'New item 3']);

			ctrl.removeItem(4);
			expect(ctrl.storage.list).toEqual(['New item 1', 'New item 2', 'New item 3']);
		});

	});


	describe('closeAlert', function(){

		it('should close the error alert', function(){

			ctrl.newItem = 'New item 1';
			ctrl.addItem();
			ctrl.newItem = 'New item 2';
			ctrl.addItem();
			ctrl.newItem = 'New item 2';
			ctrl.addItem();

			expect(ctrl.errorText).toBeTruthy();
			ctrl.closeAlert();
			expect(ctrl.errorText).toBeFalsy();

		});

	});


	describe('reset', function(){

		it('should reset the list if confirmed', function(){

			ctrl.newItem = 'New item 1';
			ctrl.addItem();
			ctrl.newItem = 'New item 2';
			ctrl.addItem();
			ctrl.newItem = 'New item 3';
			ctrl.addItem();

			ctrl.reset();
			expect(ctrl.storage.list).toEqual([]);
		});

	});


});