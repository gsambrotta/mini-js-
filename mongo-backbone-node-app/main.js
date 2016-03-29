requirejs.config({
    baseUrl: 'app',
    paths: {
      jquery: '../node_modules/jquery/dist/jquery.min',
      underscore: '../node_modules/underscore/underscore-min',
      backbone: '../node_modules/backbone/backbone',
      bootstrap: '../node_modules/bootstrap/dist/js/bootstrap.min',
      jasmine: '../jasmine-2.2.0/jasmine',
      text: '../node_modules/requirejs-text/text'

    },
    shim: {
    	'backbone': {
    		deps: ['underscore', 'jquery'],
    		exports: 'Backbone'
    	},

    	'underscore': {
    		exports: '_'
    	},

    	'jquery': {
    		exports: '$'
    	}
    }

});

// Start loading the main app file
requirejs(['app']);
