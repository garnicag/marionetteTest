define(['App', 'backbone', 'marionette', 'views/HeaderView', 'views/WeatherView', 'views/FilterView', 'views/FavoritesView', 'views/BkgView'],
    function (App, Backbone, Marionette, HeaderView, WeatherView, FilterView, FavoritesView, BkgView) {

    return Backbone.Marionette.Controller.extend({
        "initialize": function (options) {
            App.headerRegion.show(new HeaderView());
            App.filterRegion.show(new FilterView());
            App.favoritesRegion.show(new FavoritesView());
        },
        "index": function () {
            App.weatherRegion.show(new WeatherView());
        },
        /*
        "findCity": function (page,param) {
        	//this.WeatherView.searchCity(param);
			//bkgView.changeBackground(param);
            console.log("welcome to " + param);
        }
        */
        findCity: function(page,param) {
        	App.weatherRegion.show(new WeatherView({
        		"city": param
        	}));
        	//this.WeatherView.render();
            console.log("welcome to " + param);
        }
    });
});
