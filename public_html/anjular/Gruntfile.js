/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.initConfig({
        ngtemplates: {
            account: {
                cwd: 'src/teste',
                src: '**.html',
                dest: 'dest/templates.js',

                options: {
                    htmlmin: {
                        collapseWhitespace: true, collapseBooleanAttributes: true
                    }
                }
            }
        }

    });




}