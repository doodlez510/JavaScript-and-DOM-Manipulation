// from data.js
var tableData = data;

tbody =d3.select("tbody");

function displayData(data){
	tbody.text("")
	data.forEach((sighting) => {
		var new_tr=tbody.append("tr");
		Object.entries(sighting).forEach(([key,value]) =>{
			var new_td =new_tr.append("td").text(value);
		});
	});
}
	displayData(tableData);


//finding a date
var dateInputText =d3.select('#datetime');
var button = d3.select('filter-btn');


function clickSelect(){
	d3.event.preventDefault();
	console.log(dateInputText.property("value"));
	var new_table=tableData.filter(sighting => sighting.datetime===dateInputText.property("value"));
	displayData(new_table);

}

dateInputText.on('change',clickSelect);

// //finding a state
// var stateInputText = d3.select('#state');
// function clickSelect(){
// 	d3.event.preventDefault();
// 	console.log(stateInputText.property("value"));
// 	var new_table=tableData.filter(sighting => sighting.state===stateInputText.property("value"));
// 	displayData(new_table);

// }

// stateInputText.on('change',clickSelect);


// //finding a city
// var cityInputText = d3.select('#city');
// function clickSelect(){
// 	d3.event.preventDefault();
// 	console.log(cityInputText.property("value"));
// 	var new_table=tableData.filter(sighting => sighting.city===cityInputText.property("value"));
// 	displayData(new_table);

// }

// // cityInputText.on('change',clickSelect);



// var submit = d3.select("#submit");
// submit.on("click", function() {
//    // stops page from refreshing
//    d3.event.preventDefault();
 
//    d3.select(".summary").html("");
 
//    // user input as variable
//    var inputElement = d3.select("#datetime");
//    var inputValue = inputElement.property("value");
 
//    // Filter Data
//    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
 
//    // loop through
//    filteredData.forEach((dateData) => {
//      var row = tbody.append("tr");
//      Object.entries(dateData).forEach(([key, value]) => {
//        var cell = tbody.append("td");
//        cell.text(value);
//      });
//    });
//  });