module.exports = function (grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        //Clean
        clean: {
            build: [
                'build'
            ]
        },
        
        //Automate
        watch: {
            html: {
                files: ['index.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['scripts/validator.js'],
                tasks: ['uglify','jshint']
            }
        },
        
        //Htmlhint
        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['index.html']
            }
        },
        //JSHint
        jshint: {
            all: ['scripts/*.js'],
            options: {
                bitwise: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                plusplus: true,
                quotmark: true,
                regexp: true,
                trailing: true,
                maxparams: 7,
                maxdepth: 3,
                maxstatements: 50
            }
        },
        //Minify js
        uglify: {
            build: {
                files: {
                    'build/scripts/validator.min.js': ['scripts/validator.js']
                }
            }
        }
    });
    
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-htmlhint');
	
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', ['clean', 'htmlhint', 'jshint', 'uglify']);

};