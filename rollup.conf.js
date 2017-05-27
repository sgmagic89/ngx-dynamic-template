export default {
	entry: 'index.js',
	dest: 'bundles/ngx-dynamic-template.umd.js',
	format: 'umd',
	external: [
		'@angular/core',
		'@angular/common',
		'@angular/http',
		'@angular/compiler'
	],
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
		'@angular/http': 'ng.http',
		'@angular/compiler': 'ng.compiler'
	},
	moduleName: 'ngx.dynamic.template'
}