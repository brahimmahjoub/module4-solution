var menuApp = angular.module('MenuApp', ['CategoryComponent', 'ItemComponent', 'Data', 'ui.router']);
menuApp.controller('MenuAppController', MenuAppController);
menuApp.config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url : '/home',
    templateUrl : 'home.html'
  })

  .state('categories', {
    url : '/categories',
    templateUrl : 'categories.html'
  })

  .state('items', {
    url : '/items/{catId}',
    templateUrl : 'items.html'
  });
};

MenuAppController.$inject = ['MenuDataService']
function MenuAppController(MenuDataService) {
  var menu = this;

}