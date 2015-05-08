/* global module */

module.exports = function(grunt){
    
    grunt.registerTask('build', function (){
        console.log('building...');
    });
    
    grunt.registerTask('test', function(){
        console.log('testing...');       
    });
    
    grunt.registerTask('uploading', function (){
        console.log('uploading...');        
    });
    
    grunt.registerTask('deploy', ['test','build','uploading']);
    
};