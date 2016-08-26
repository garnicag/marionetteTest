define( [ 'App', 'marionette', 'handlebars', 'text!content/content.json', 'text!templates/favorites.hbs'],
    function( App, Marionette, Handlebars, data, template) {
        var FavoritesView = Marionette.ItemView.extend({
            "template": Handlebars.compile(template),
            "defaultData": $.parseJSON(data),

            "render": function () {
                this.$el.html(this.template(this.defaultData));
                return this;
            },

            "events": {

            }
        });

        return FavoritesView;
    });
