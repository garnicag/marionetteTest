//Gruntfile
module.exports = function(grunt) {

	// requirejs compile options
	var compileOptions = {
		mainConfigFile: 'app/js/app/config/Init.js',
		baseUrl: 'app/js',
		name: 'vendor/almond/almond',
		out: 'app/js/main.min.js',
		removeCombined: false,
		findNestedDependencies: true,

		uglify2: {
	   		output: {
		   		beautify: true
	   		},
		},

		//Removes console.logs for production
		/*
		onBuildWrite: function (moduleName, path, contents) {
			if(/(.*)js\/modules\/(.*)/.test(path)) return contents.replace(/console.log(.*);/g, ';');
			return contents;
		}
		*/
	}

	//Initializing the configuration object
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					"./app/css/styles.css": "./app/css/sass/styles.scss"
				}
			}
		},
		requirejs: {
			compile: {
				options : compileOptions
			}
		},
		connect: {
			server: {
				options: {
					port: 8002,
					hostname: '*',
					base: 'app',
					livereload: true
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: ['app/css/sass/*.scss'],
				tasks: ['sass']
			},
			html: {
				files: ['app/index.html','**/*.html']
			},
			requirejs: {
				files: ['app/js/app/**/*.js'],
				tasks: ['requirejs']
			}
		}
	});

	// Plugin loading
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Task definition
	grunt.registerTask('default', ['connect', 'watch']);

};
