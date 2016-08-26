define([ 'marionette', 'handlebars', 'text!templates/header.hbs'],
    function (Marionette, Handlebars, template) {
        return Marionette.ItemView.extend({
            template:Handlebars.compile(template)
        });
    });
