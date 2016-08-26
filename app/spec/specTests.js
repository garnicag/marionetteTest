define(["views", "jquery", "marionette"],
  function(Views, $, Marionette){
      describe("the widget to add links", function(){
          var testApp, widget, regionId = "#test-region",
              desc = 'desc', url = 'http://test';

          beforeEach(function(){
              testApp = new Marionette.Application();
              testApp.addRegions({
                  region: regionId
              });
              testApp.addInitializer(function(){
                  widget = new Views.AddLink();
                  testApp.region.show(widget);
              });
              testApp.start();
          });

          afterEach(function(){
              $(regionId).empty();
          });

          it("fires the event when link is added", function(){
               var triggered = false;
               widget.on('addLink', assertThatArgumentsMatch);
               fillInTheFormWith(desc, url);

               submit();

               expect(triggered).toBeTruthy();
               function assertThatArgumentsMatch (link){
                   triggered = true;
                   expect(link.description).toEqual(desc);
                   expect(link.url).toEqual(url);
               }
          });

          function fillInTheFormWith(desc, url){
               $('[name="description"]').val(desc);
               $('[name="url"]').val(url);
          }
          function submit (){
               $('[name="add-link"]').click();
          }
      });
  });
