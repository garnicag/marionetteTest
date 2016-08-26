define(["jquery", "backbone"],
    function ($, Backbone) {
        var WeatherModel = Backbone.Model.extend({
            "requestParam": {
                "units": "metric",
                "APPID": "e31fd8d3740d5ec07ab42317860ae208"
            },

            "getData": function () {
                this.url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.get('city');
                this.fetch({
                    data: $.param(this.requestParam)
                });
            },

            "defaults": {}
        })
        return WeatherModel;
    }
);
