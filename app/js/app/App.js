require(["App", "routers/AppRouter", "controllers/Controller",  "jquery"],
    function (App, AppRouter, Controller) {
        App.appRouter = new AppRouter({
            controller: new Controller()
        });
        App.start();
    });

define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars'],
    function ($, Backbone, Marionette, _, Handlebars) {
        var App = new Backbone.Marionette.Application();

        App.addRegions({
            headerRegion: "header",
            weatherRegion: "#weather",
            filterRegion: "#filter",
            favoritesRegion: "#favorites",
            bkgRegion: "#bodyBkg"
        });

        App.addInitializer(function (options) {
            Backbone.history.start();
        });
        return App;
    });
