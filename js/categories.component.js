var categoryComponent = angular.module('CategoryComponent', ['Data']);
categoryComponent.component('category', {
	templateUrl : 'categoryList.html',
	controller: CategoryComponentController,
	binding: {
		categories : '<'
	}
})

CategoryComponentController.$inject = ['MenuDataService']
function CategoryComponentController(MenuDataService) {
	var $ctrl = this;
	$ctrl.getAllCategories = [];
	MenuDataService.getAllCategories().then(function(result) {
		$ctrl.getAllCategories = result.data;
	});
}