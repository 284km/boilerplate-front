(function() {
  require.config({
    paths: {
      jquery: 'vendor/jquery/jquery',
      underscore: 'vendor/underscore/underscore',
      backbone: 'vendor/backbone/backbone'
    }
  });

  require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    return $(function() {
      return console.log('Hello');
    });
  });

}).call(this);
