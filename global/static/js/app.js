// // This is where I read in my CSV

// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 600;

// // Define the chart’s margins as an object
// var chartMargin = {
//     top: 40,
//     right: 40,
//     bottom: 40,
//     left: 40
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//     .selectAll(".Graph_1")
//     .append("svg")
//     .attr("height", svgHeight)
//     .attr("width", svgWidth)
//     .style("fill", "#69B3A2");

// // Append a group to the SVG area and shift (‘translate’) it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//     .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);



d3.json("./Job_Type").then(function (importedData) {

// function buildPlot(skillSalary) {
// d3.csv("./Skill_By_Job_Type.csv").then(function (importedData) {
    console.log(importedData)

    var Choice = "Engineer"

    var filteredData = importedData.filter(item => item.Job_Type === Choice);

    var data = {
        y: filteredData.map(item => parseInt(item.Count)),
        x: filteredData.map(item => item.Skill),
        type: "bar"
    } 
    console.log(data)

    var layout = {
      title: "'Bar' Chart",
      height: 600,
      width: 600
    };
    
    Plotly.newPlot("plot", [data], layout);




    // // var salary = (importedData.map(data => data.Queried_Salary))
    // // console.log(salary)

    // // var length = Object.values(importedData).length
    // // console.log(length)

    // // var nested_data = d3.nest()
    // //     .key(function (d) { return d.Job_Type; })
    // //     .rollup(function (ids) {
    // //         return ids.length;
    // //     })
    // //     .entries(importedData);
    // // console.log(nested_data)

    // // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
    // var xBandScale = d3.scaleBand()
    //     .domain(importedData.map(data => data.Skill))
    //     .range([0, chartWidth])
    //     .padding(0.1)

    // // Create a linear scale for the vertical axis.
    // var yScale = d3.scaleLinear()
    //     .domain([0, d3.max(importedData.map(data => data.Count))])
    //     // .domain([0, d3.max(data => data.value)])
    //     .range([chartHeight, 0]);

    // // Create two new axes functions passing our scales in as arguments
    // var yAxis = d3.axisLeft(yScale).ticks(10);
    // var xAxis = d3.axisBottom(xBandScale);

    // // Append two SVG group elements to the chartGroup area,
    // // and create the bottom and left axes inside of them
    // chartGroup.append("g")
    //     .call(yAxis)

    // chartGroup.append("g")
    //     .attr("transform", `translate(0, ${chartHeight})`)
    //     .call(xAxis);

    // // Create one SVG rectangle per piece of importedData
    // // Use the linear and band scales to position each rectangle within the chart
    // chartGroup.selectAll(".bar")
    //     .data(importedData)
    //     .enter()
    //     .append("rect")
    //     .attr("class", "bar")
    //     .attr("x", d => xBandScale(d.Skill))
    //     .attr("y", d => yScale(d.Count))
    //     .attr("width", xBandScale.bandwidth())
    //     .attr("height", d => chartHeight - yScale(d.Count))
    //     .style("color", "black");
}).catch(function (error) {
    console.log(error);
});
