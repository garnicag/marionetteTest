//Gruntfile
module.exports = function(grunt) {

	// requirejs compile options
	var compileOptions = {
		mainConfigFile: 'app/scripts/main.js',
		baseUrl: 'app/scripts',
		include: ['main'],
		out: 'dist/main.min.js',
		removeCombined: false,
		findNestedDependencies: true,

		//Removes console.logs for production
		onBuildWrite: function (moduleName, path, contents) {
			if(/(.*)js\/modules\/(.*)/.test(path)) return contents.replace(/console.log(.*);/g, ';');
			return contents;
		}
	}

	//Initializing the configuration object
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compact'
				},
				files: {
					"./app/styles/styles.css": "./app/styles/styles.scss"
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
					port: 8000,
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
				files: ['app/styles/*.scss'],
				tasks: ['sass']
			},
			html: {
				files: ['app/index.html','**/*.html']
			},
			requirejs: {
				files: ['app/scripts/main.js'],
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
