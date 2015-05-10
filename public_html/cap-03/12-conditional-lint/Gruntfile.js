/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function(grunt){
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.initConfig({
        
        jshint:{
            options:{
                jshintrc: '.jshintrc'
            },
            target : 'src/**/*.js'
        }
        
    });
    
    grunt.registerTask('check',function(){
        
        if(grunt.file.exists('.jshintrc')){
            grunt.task.run('jshint');
        }
        
    });
    
};
