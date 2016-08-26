require.config({
    baseUrl:"./js/app",
    paths:{
        'jquery': '../vendor/jquery/dist/jquery',
        'underscore': '../vendor/underscore/underscore',
        'backbone': '../vendor/backbone/backbone',
        'backbone.babysitter': '../vendor/backbone.babysitter',
        'backbone.wreqr': '../vendor/backbone.wreqr',
        'marionette': '../vendor/marionette/lib/backbone.marionette',
        'backbone.validateAll': '../libs/plugins/Backbone.validateAll',
        'handlebars': '../vendor/handlebars/handlebars',
        'text': '../vendor/text/text'
    }
});

require(["App", "routers/AppRouter", "controllers/Controller",  "jquery"],
    function (App, AppRouter, Controller) {
        App.appRouter = new AppRouter({
            controller: new Controller()
        });
        App.start();
    });
