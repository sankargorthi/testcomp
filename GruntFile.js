module.exports = function (grunt) {
    'use strict';
    var hbs;

    require('load-grunt-tasks')(grunt);
    hbs = require('component-builder-handlebars');

    grunt.initConfig({
        componentbuild: {
            build: {
                options: {
                    verbose: false,
                    dev: true,
                    noRequire: false,
                    name: 'build',
                    standalone: true,
                    sourceUrls: true,
                    configure: function(builder) {
                        builder.use(hbs({
                            extname: '.hbs',
                            partialRegex: /^_/
                        }));
                    }
                },
                src: '.',
                dest: './build/'
            }
        }
    });

    grunt.registerTask('default', [
        'componentbuild:build'
    ]);
};
