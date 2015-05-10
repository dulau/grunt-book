/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.exports = function (grunt){
    
    grunt.registerTask('analyze','analyzes the source', function(){
        console.log("analyzing...");
    });
    
    grunt.registerMultiTask('compile','compiles the source',function(){
        console.log('compiling...');
    });
    
    grunt.registerTask('all','analyzes and compiles the source', ['analyze','compile']);
};