'use strict';

module.exports = function(grunt){

	// config
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		// install bower dependencies when building
		bower: {
			install: {
				options: {
					install: true,
					copy: false,
					targetDir: './app/bower_components',
					cleanTargetDir: true
				}
			}
		},

		jshint: {

		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'app/js/shoppinglist.module.js',
				dest: 'build/shoppinglist.module.min.js'
			}
		}

	});


	// load tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-karma');
	

	// register tasks
	grunt.registerTask('default', ['uglify'] );

};