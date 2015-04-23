/**
*		Module	 dependencies
*/
var express = require ('express')
		, stylus = require ('stylus')
		, nib = require ('nib')
		, path = require('path')
var app = express()
function compile (str, path){
	return stylus (str)
			. set ('filename', path)
			. use (nib())
}
app.set('views', __dirname  +'/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(stylus.middleware(
	{	src: __dirname + '/public'
	,	compile : compile
	}
))

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
	res.render ('index')
})
app.listen (3030)