

/* global module */

var request = require('request');
var url = "https://github.com/paulo-jm/grunt-book/blob/master/README.md";

module.exports = function (grunt) {

    grunt.registerTask('webget', function () {

        var done = this.async();
        request(url, function (err, response, contents) {
            if (err) {
                done(err);
            } else {
                if (response.statusCode !== 200) {
                    done(new Error("not ok."));
                } else {
                    grunt.file.write('File.md', contents);

                    grunt.log.ok("File.md sucessfull created");
                    done();
                }
            }
        });

    });

};