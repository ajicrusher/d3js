(function(){
	var margin ={top:50, left: 50 , right: 50, bottom:50 },
	height = 400 - margin.top + margin.bottom,
	width = 800 - margin.left + margin.right;

	var svg = d3.select("map")
		.append("svg")
		.attr("height", height+margin.top+margin.bottom)
		.attr("width", width + margin.left+ margin.right)
		.append("g")
		.attr("transform", "translete("+ margin.left + "," + margin.top+")");


		d3.queque()
			.defer(d3.json,"world.json")
			.await(ready)

			function ready (error, data){
				console.log(data)

			}
	})();
