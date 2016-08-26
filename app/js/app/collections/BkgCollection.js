define(['jquery','backbone', 'text!content/content.json', 'models/PictureModel'],
  function($, Backbone, data, PictureModel) {
    var BkgCollection = Backbone.Collection.extend({
        "defaultData": $.parseJSON(data),
        "model": PictureModel,

        "initialize": function(city) {
            this.city = city || this.defaultData.defaultCity;
        },

        "requestParam": {
            "method": "flickr.photos.search",
            "api_key": "afb58266815fa1fe013560594df4c254",
            "tags": "nature%2Ccity&2Clandmark%2Clandscape%2Csky",
            "sort": "relevance",
            "extras": "url_c",
            "content_type": 1,
            "format": "json",
            "nojsoncallback": 1
        },

        "url": function(city) {
			this.url = 'https://api.flickr.com/services/rest/?text=' + this.city;
            this.fetch({
                data: $.param(this.requestParam)
            });
        }
    });
    return BkgCollection;
  });
