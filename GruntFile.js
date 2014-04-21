module.exports = function (grunt) {
    'use strict';
    var hbs, component;

    require('load-grunt-tasks')(grunt);
    hbs = require('component-builder-handlebars');

    component = {
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
    };

    grunt.initConfig({
        componentbuild: {
            build: component
        }
    });

    grunt.registerTask('default', [
        'componentbuild:build'
    ]);
};
