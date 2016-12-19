
MenuDataService .$inject = ['$http']
function MenuDataService ($http) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: 'GET',
      url : ('https://davids-restaurant.herokuapp.com/categories.json')
    });
    return response;
  };

  var itemsForCategory = [];
  service.getItemsForCategory = function (categoryShortName) {
    $http({
      method: 'GET',
      url : ('https://davids-restaurant.herokuapp.com/menu_items.json')
    }).then(function(result) {
      var menu_items = result.data.menu_items;

      for (var i = 0; i < menu_items.length; i++) {
        if (menu_items[i].short_name.indexOf(categoryShortName) > -1) {
          itemsForCategory.push(menu_items[i]);
        }
      }      
    });

    return itemsForCategory;
  };


}