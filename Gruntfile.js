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
    watch: {
      files: ['<%= copy.main.cwd %>'],
      tasks: ['']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean', 'copy']);

};