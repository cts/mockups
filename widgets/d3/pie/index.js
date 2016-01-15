var renderPieChart = function(widget) {
  var container = d3.select(widget.get(0));

  var width = 960,
      height = 500,
      radius = Math.min(width, height) / 2;

  var color = d3.scale.ordinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var arc = d3.svg.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

  var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) { return d.population; });

  var svg = container.append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var headers = $("th").map(function() {
    return $(this).text();
  }).get();
  var contents = $("td").map(function() {
    return $(this).text();
  }).get();

  var data = [];
  for (var i=0; i<contents.length; i+=2) {
    var dataPoint = {};
    dataPoint[headers[0]] = contents[i];
    dataPoint[headers[1]] = parseInt(contents[i+1]);
    data.push(dataPoint);
  }

  data.forEach(function(d) {
    d.population = +d.population;
  });

  var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

  g.append("path")
    .attr("d", arc)
    .style("fill", function(d) { return color(d.data.age); });

  g.append("text")
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
    .attr("dy", ".35em")
    .style("text-anchor", "middle")
    .text(function(d) { return d.data.age; });
}

CTS.loaded.then(function() {
  CTS.on('cts-received-graft', function(event) {
    var widget = event.target.value;
    renderPieChart(widget);
  });
});