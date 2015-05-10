/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global module */
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //project config

    grunt.initConfig({
        srcFiles: ['src/a.js', 'src/b.js', 'src/c.js'],
        concat: {
            target1: {
                files: {
                    "build/abc.js": "<%= srcFiles %>"
                }
            }
        },
        watch: {
            target1: {
                files: "<%= srcFiles %>",
                tasks: ['concat']
            }
        }
    });

    //define default task

    grunt.registerTask('default', ['concat', 'watch']);

};


