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
      //all: ['gruntfile.js', 'src/**/*.js'],
      ignore_warning: {
        options: {
          //'-W009': true,
          //'-W041': true
        },
        src: ['gruntfile.js', 'src/collections/**/*.js', 'src/models/**/*.js', 'src/views/**/*.js', 'router.js', 'app.js']
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
        src: ['src/loadTmps.js', 'src/models/**/*.js', 'src/collections/**/*.js', 'src/views/**/*.js', 'src/router.js', 'src/app.js'],
        dest: 'src/app-built.js',
      },
    },

    watch: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      tasks: ['jshint', 'concat'],
    }

  });

  grunt.registerTask('dev', ['jshint', 'concat', 'watch']);

};
