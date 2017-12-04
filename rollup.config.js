import babel from 'rollup-plugin-babel'

export default {
	entry: 'src/index.js',
	dest: 'dist/index.js',
	format: 'umd',
	sourceMap: 'dist/index.js.map',
	moduleName: 'react-rating-stats',
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
}
