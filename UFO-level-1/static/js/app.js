// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody")

//define a function inputData
function inputData(data){
    // Clear table
    tbody.text("")
    // Loop through data from ufo report
    data.forEach((ufoReport) => {
    // Sppend one table row `tr` for each ufo report object
    var row = tbody.append("tr");
    // Use `Object.entries` to return each ufo report value
    Object.entries(ufoReport).forEach(([key, value]) => {
    // Append a cell to the row for each value in the ufo report object
    var cell = row.append("td");
    cell.text(value);
            })
            })}
// Call the function
inputData(data);

// Select the button
var button = d3.select("#filter-btn");
// Get a reference to the input element on the page
var inputElement = d3.select(".form-control");

//Use the `on` function in d3 to attach an event to the handler function
button.on("click", function() {
    d3.event.preventDefault();
    var inputValue = inputElement.property("value");
    var filterData = data.filter(report => report.datetime === inputValue);
    // Call the input Data function for filterData
    inputData(filterData)})
 


