/* global module */

//log task example 01-deploy-log-task
var fs = require('fs');
module.exports = function (grunt){
    
    grunt.registerTask('log-deploy', function (){
       
       var message = 'Deployment on ' + new Date() + '\n';         
       
       fs.appendFileSync('deploy.log', message);
       grunt.log.writeln('Appended "' + message +'"');
       
    });
    
};

