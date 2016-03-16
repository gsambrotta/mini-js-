module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      //all: ['gruntfile.js', 'app/**/*.js'],
      ignore_warning: {
        options: {
          //'-W009': true,
          //'-W041': true
        },
        src: ['gruntfile.js', 'app/collections/**/*.js', 'app/models/**/*.js', 'app/views/**/*.js', 'router.js', 'app.js']
      },
    },

    /*
    sass: {
      dist: {
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    },
    */

    concat: {
      options: {
        separator: '/////////////////////////// \n',
      },
      dist: {
        src: ['app/loadTmps.js', 'app/models/**/*.js', 'app/collections/**/*.js', 'app/views/**/*.js', 'app/router.js', 'app/app.js'],
        dest: 'app/app-built.js',
      },
    },

    watch: {
      files: ['Gruntfile.js', 'app/**/*.js'],
      tasks: ['jshint', 'concat'],
    }

  });

  grunt.registerTask('dev', ['jshint', 'concat', 'watch']);

};
