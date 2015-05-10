/* global module */
//project

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            build: {
                options: {
                    join: true
                },
                src: [
                    "src/scripts/**/*.coffee",
                    "!src/scripts/app.coffee",
                    "src/scripts/app.coffee"
                ],
                dest: "build/js/app.js"
            }
        },
        stylus: {
            build: {
                src: "src/styles/app.styl",
                dest: "build/css/app.css"

            }
        },
        jade: {
            build: {
                options: {
                    pretty: true
                },
                src: "src/views/app.jade",
                dest: "build/app.html"
            }
        },
        uglify: {
            options: {
                compress: {
                    global_defs: {
                        "DEBUG": false
                    },
                    dead_code: true
                }
            },
            compress: {
                src: '<%= coffee.build.dest %>',
                dest: '<%= coffee.build.dest %>'
            }
        },
        cssmin: {
            compress: {
                src: "<%= stylus.build.dest %>",
                dest: "<%= stylus.build.dest %>"
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: false,
                removeRedundantAttributes: true
            },
            compress: {
                src: "<%= jade.build.dest %>",
                dest: "<%= jade.build.dest %>"
            }
        },
        watch : {
            scripts : {
                files : "<%= coffee.build.src %>",
                tasks : 'scripts'
            },
            styles : {
                files : "<%= stylus.build.src %>",
                tasks : 'styles'
            },
            views : {
                files : "<%= jade.build.src %>",
                tasks : 'views'
            }
        }

    });

    var env = grunt.option('env') || 'dev';

    grunt.registerTask('scripts', function(){
        grunt.task.run('coffee');
        if (env === 'prod') {
            grunt.task.run('uglify');
        }
    });
    
    grunt.registerTask('styles', function(){
        grunt.task.run('stylus');
        if (env === 'prod') {
            grunt.task.run('cssmin');
        }
    });
    
    grunt.registerTask('views', function(){
        grunt.task.run('jade');
        if (env === 'prod') {
            grunt.task.run('htmlmin');
        }
    });
    
    grunt.registerTask('build',['scripts', 'styles', 'views']);
    grunt.registerTask('default', ['build', 'watch']);
    

};