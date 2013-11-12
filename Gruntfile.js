/**
 * Grunt Buildfile for Cascading Tree Sheets
 * To be used with GruntJS <http://gruntjs.com/>
 */

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-web-server');

  // Project configuration.
  grunt.initConfig({
    pkg: "CTS Mockups",
    web_server: {
      whyisthisnecessary: 'idontknow',
      options: {
        cors: true,
        port: 7878,
        logRequests: true,
        nevercache: true
      }
    },
  });

  grunt.registerTask('default', ['web_server']);
};
