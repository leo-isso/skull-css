module.exports = function(grunt) {

  grunt.initConfig({
    autoprefixer: {
      dist: {
        files:{
          'src/css/skull.css': 'src/css/skull.css' 
        }
      }
    },
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
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
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
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['skull.css'],
          dest: 'src/css/',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      compass: {
        files: ['src/**/*.{scss,sass}'],
        tasks: ['compass', 'autoprefixer', 'cssmin']
      },
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean', 'compass', 'autoprefixer', 'cssmin', 'copy']);
  grunt.registerTask('watchfiles', ['watch']);

};