// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var tbody = d3.select("tbody");

console.log("Original Data")
console.log(tableData)

tableData.forEach((ufoReport) => {
var row = tbody.append("tr");
Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
});
});

button.on("click", function() {

    d3.event.preventDefault();

    tbody.html("")

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log("Filtered Data")
    console.log(filteredData);

    filteredData.forEach((ufoReport) => {
        var tbody = d3.select("tbody");
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});
