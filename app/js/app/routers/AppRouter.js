define(['marionette', 'controllers/Controller'], function(Marionette, Controller) {
   return Marionette.AppRouter.extend({
       appRoutes: {
           '': 'index',
           '*city/:city': 'findCity'
       }
   });

   return appRoutes;
});
