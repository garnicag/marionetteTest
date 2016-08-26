define( [ 'App', 'marionette', 'handlebars', 'text!content/content.json', 'text!templates/filter.hbs'],
    function( App, Marionette, Handlebars, data, template) {
        var ENTER_KEY = 13;
        
        var FilterView = Marionette.ItemView.extend({
            "template": Handlebars.compile(template),
            "defaultData": $.parseJSON(data),

    		findCity: function(e) {
    			var searchInput = this.$('#new-city');
    			if (e.keyCode != ENTER_KEY) return;
            	this.query = searchInput.val();
            	if (!this.query) return;
            	routerCity.navigate('city/' + this.query, true);
    			console.log(searchInput);
        	},

            "render": function () {
                this.$el.html(this.template(this.defaultData));
                return this;
            },

            "events": {

            }
        });

        return FilterView;
    });
