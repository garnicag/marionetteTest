define( [ 'App', 'marionette', 'handlebars', 'models/PictureModel'],
    function( App, Marionette, Handlebars, PictureModel) {
        var BkgView = Marionette.CollectionView.extend({
            el: $('body'),

            "initialize": function() {
    			this.backgroundView = new PictureModel();
                this.backgroundView.getData();
    		},

            "render": function() {
                var bkgPic,
                    phIndex;
                /*
                while (bkgPic == undefined) {
                    phIndex = Math.floor((Math.random() * 99)+1);
                    console.log("Picture No." + phIndex);
                    bkgPic = this.backgroundView.attributes.models[phIndex];
                    console.log("url " + bkgPic);
                } */

                bkgPic = this.backgroundView.attributes.models[phIndex];
                console.log("url " + bkgPic);

                $(this.el).css('background-image', 'url("' + bkgPic + '")');
            }
        });
        return BkgView;

    });
