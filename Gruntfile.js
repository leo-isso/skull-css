/* eslint-env node */

module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      build: {
        src: ['dist']
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: '**',
        dest: 'dist/',
      },
    },
    sass: {                              
      dist: {                            
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'src/sass',
          src: ['skull.sass'],
          dest: 'src/css/',
          ext: '.css'
        }]
      }
    },
    watch: {
      files: ['<%= copy.main.cwd %>'],
      tasks: ['sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean', 'sass', 'copy']);

};