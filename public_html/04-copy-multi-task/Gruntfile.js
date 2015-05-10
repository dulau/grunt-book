/* global module */
// code example 04-copy-multi-task
module.exports = function (grunt) {

    grunt.registerMultiTask('copy', function () {

        this.files.forEach(function (file) {
            grunt.file.copy(file.src, file.dest);
        });

        grunt.log.writeln('Copied ' + this.files.lenght + ' files');

    });

    grunt.initConfig({
        copy: {
            target1: {
                files: {
                    'dest/file1.js': 'src/file1.js',
                    'dest/file2.js': 'src/file2.js'
                }
            },
            target2: {
                files: {
                    'dest/file3.js': 'src/file3.js',
                    'dest/file4.js': 'src/file4.js'
                }
            }
        }
    });

};