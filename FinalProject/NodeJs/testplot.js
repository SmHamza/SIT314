var plotly = require('plotly')("syHamza", "0Shb0l2e8i9PglIguOgV")

var data = [{
	x:[], 
	y:[],
	type: 'scatter'
}];
 var layout = {fileopt : "overwrite", filename : "server.js"};

plotly.plot(data, layout, function (err, msg) { 
	if (err)
		return console.log(err); 
		console.log(msg); });
