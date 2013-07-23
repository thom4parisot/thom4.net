/* jshint node */
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      extension: ['themes/oncletom/**/*.js']
    },

    less: {
      theme: {
        options: {},
        files: [
          {
            "src": "themes/oncletom/source/assets/_less/fonts/*.less",
            "dest": "themes/oncletom/source/assets/css/main.css"
          },
          {
            "src": "themes/oncletom/source/assets/_less/components/*.less",
            "dest": "themes/oncletom/source/assets/css/fonts.css"
          }
        ]
      }
    },

    watch: {
      "now-playing": {
        files: ['themes/oncletom/source/assets/_less/*.less'],
        tasks: ['build-assets']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['test']);
  //
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build-assets', ['less']);
};