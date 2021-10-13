

//***1. Import data***//
// Prepare an array to store data
var dataSet = [];

// Load CSV files to draw graphs
d3.csv("data/mydata.csv", function (error, data) {
	for (var i = 0; i < data.length; i++) {	// Repeat as many lines of data
		dataSet.push(data[i].item1);	// Extract data from item1 label only
	}

	//***2. Selection ***//
	// Draw graphs using data
	d3.select("#myGraph")
		.selectAll("rect")

		//***3. Binding***//
		.data(dataSet)   
		.enter()    
		.append("rect")    
		.attr("x", 10)    
		.attr("y", function (d, i) {	
			return i * 25;	
		})
		
		
		//***4. animation***//
		.attr("height", "20px")    
		.attr("width", "0px")    
		.transition()    // Apply animation to the graph
		.delay(function (d, i) {
			return i * 500;	
		})
		.duration(2500)    
		.attr("width", function (d, i) {	
			return d + "px";	// Use data as width
		})

	//***5. Scales***//
	var xScale = d3.scale.linear()  
	.domain([0, 300]) 
	.range([0, 300]);  


	//***6. Axes***//
	d3.select("#myGraph")
	.append("g")	// Group all grphical elements
	.attr("class", "axis")	
	.attr("transform", "translate(10, "+((1+dataSet.length) * 20+5)+")")	
	.call(d3.svg.axis()	
		.scale(xScale) 
		.orient("bottom")   
	)
});


//***7. Events***//
d3.select("#updateButton").on("click", function(){
	for(var i=0; i<dataSet.length; i++){
		dataSet[i] = Math.floor(Math.random() * 320);	
	}
	d3.select("#myGraph")	
		.selectAll("rect")	
		.data(dataSet)	
		.transition()	
		.attr("width", function(d, i){	
			return d +"px";	
		})
})
