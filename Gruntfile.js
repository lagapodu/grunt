module.exports=function(grunt){
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['src/*.js', 'src2/*.js'] ,
        dest: 'build/all.min.js'
      }
    },
  watch: {
      js:  { files: ['src/*.js', 'src2/*.js'] , tasks: [ 'uglify' ] },
  }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('test', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });
  grunt.event.on('watch', function(action, filepath) {
     //grunt.config(['uglify', 'build', 'src'], filepath);
       grunt.log.write('Watch is triggered');
 });

  // Default task(s).
  grunt.registerTask('default', ['uglify','test','watch']);

};
