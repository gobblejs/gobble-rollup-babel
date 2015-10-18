var path = require( 'path' );
var r = require( 'rollup-babel' );

module.exports = function rollupBabel ( inputdir, outputdir, options ) {
	if ( !options.entry ) {
		throw new Error( 'You must supply `options.entry`' );
	}

	options.dest = path.resolve( outputdir, options.dest || options.entry );
	options.entry = path.resolve( inputdir, options.entry );

	options.babel = options.babel || {};
	if ( options.sourceMap ) options.babel.sourceMap = options.sourceMap;

	return r.rollup( options ).then( function ( bundle ) {
		return bundle.write( options );
	});
};
