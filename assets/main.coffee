require.config
  paths:
    jquery: 'vendor/jquery/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',

require ['jquery', 'underscore', 'backbone'], ($, _, Backbone) ->
  $ ->
    console.log 'Hello'
