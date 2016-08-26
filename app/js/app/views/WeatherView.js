define( [ 'App', 'marionette', 'handlebars', 'models/WeatherModel', 'text!templates/weather.hbs', 'text!content/content.json'],
    function( App, Marionette, Handlebars, WeatherModel, template, data) {
        var ENTER_KEY = 13;

        var WeatherView = Marionette.ItemView.extend({
            "template": Handlebars.compile(template),
            "defaultData": $.parseJSON(data),

            "initialize": function() {
    			this.weather = new WeatherModel({
                    "city": this.defaultData.defaultCity
                });
                this.listenTo(this.weather, 'sync', _.bind(this.render, this));
                this.weather.getData();
    		},

            "templateContext": {
                roundedTemp: function() {
                    //return Math.round(this.weather.attributes.main.temp);
                }
            },

            "searchCity": function(city) {
    			this.weather.setUrl(city);
    			this.weather.fetch();
    		},

            "render": function () {
                this.$el.html(this.template(_.extend({}, this.weather.attributes, this.defaultData, this.templateContext)));
                return this;
            },

            "events": {

            }
        });

        return WeatherView;
    });
