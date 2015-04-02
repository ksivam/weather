var http = require("http");
var options = {
	hostname: "www.ncdc.noaa.gov",
	path: "/cdo-web/api/v2/data?datasetid=GHCND&locationid=FIPS:02&startdate=2000-05-01&enddate=2001-05-31",
	method: "GET",
	headers: {token: "cmEEJQMsKuxsyUHTocUFEmGYcycVUEhE"}
};
var responseHandler = function(res) {
	var data = "";

	res.on("data", function(chunk){
		data += chunk;
	});

	res.on("end", function(){
		console.log(data);
	});
};

var req = http.request(options, responseHandler);
req.on("error", function(err) {
	console.log("ERROR: " + err);
});

req.end();
