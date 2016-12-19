var itemComponent = angular.module('ItemComponent', ['Data']);
itemComponent.component('item', {
	templateUrl : 'itemList.html',
	controller: ItemsComponentController,
	binding: {
		items : '<'
	}
})

//ItemsComponentController.$inject = ['item']
function ItemsComponentController() {
	var $ctrl = this;
	$ctrl.getItemsForCategory = []
	//console.log(item)
}