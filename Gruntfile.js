module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-newer');


    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'public/js/site.min.js': [
                        'app/vendor/jquery/dist/jquery.min.js',
                        'app/js/site.js'
                    ]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/css/style.css': 'app/scss/style.scss'
                }
            }
        },
        processhtml: {
            options: {
                templateSettings: {
                    interpolate: /{{([\s\S]+?)}}/g
                },
                recursive: true,
                data: require('./content/content.json')
            },
            dist: {
                files: {
                    'public/index.html': ['app/index.shtml']
                }
            }
        },
        watch: {
            html: {
                files: ['app/**/*.shtml'],
                tasks: ['processhtml']
            },
            sass: {
                files: ['app/scss/**/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['app/js/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('default', ['processhtml', 'sass', 'uglify', 'watch' ]);


};