function generateColors(color) {
    var primary = (6+Math.floor(Math.random()*5))*25;
    var secondary = 50+ Math.floor(Math.random()*(primary/2-50));
    var primary2 = (8+Math.floor(Math.random()*3))*25;
    if (color=="greens") {
      return "#14" + primary.toString(16)+ secondary.toString(16);
    }
    if (color=="blues") {
      return "#14" + secondary.toString(16) + primary.toString(16);
    }
    if (color=="reds") {
      return "#"+primary.toString(16) + "14" +  secondary.toString(16);
    }
    if (color=="purples") {
      return "#" + primary.toString(16)+ "14" + primary2.toString(16)
    }
    if (color=="yellows") {
      return "#" + primary2.toString(16)+ primary2.toString(16) + "14";
    }
    else {
       var colors = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"];
       return colors[Math.floor(Math.random() * (7))];
    }
  }
function getData(node, selector) {
  return node.find(selector).text().split(" ");
}


CTS.loaded.then(function() {
  CTS.on('cts-received-graft', function(evt) {
    widget = evt.target.value;
    console.log("------ WIDGET Render JavaScript -------");
    var dataElem = widget.find(".worddata");
    var cloudElem = widget.find(".thewordcloud").first()[0];

    var width = 300;
    var height = 300;
    var properties = dataElem.find('.properties');
    if (properties) {
      if (properties.find('.width')) {
        width = parseInt(properties.find('.width').text());
      };
      if (properties.find('.height')) {
        height = parseInt(properties.find('.height').text());
      };
    }

    var area = width*height;
    var allWords = new Array();
    var sizes = new Array();
    var cols = new Array();
    // This will be used to determine the size fonts
    var bigWords = [];
    var mediumWords = [];
    var smallWords = [];

    bigWords = getData(dataElem, '.big-words');
    mediumWords = getData(dataElem, '.medium-words');
    smallWords = getData(dataElem, '.small-words');

    // Asume we want medium words to be .7 times the size of big words, and small words .3 times the size of big words
     // Lets assume that a standard word is 4 times as long as it is tall equation to find average font size so words 
     //take up the area is numBig*4x^2+numMed*4*(.7x)^2+numSmall*4*(.3x)^2= 4(numBig+numMed*.7*.7+numSmall*.3*.3)x^2 = area/2 ,where x is the font size.
    var largeFont = Math.sqrt(area/(3*(bigWords.length+mediumWords.length*.5*.5+smallWords.length*.3*.3)));
    for (var i in bigWords) {
      if (bigWords[i]!="") {
        allWords.push(bigWords[i]);
        sizes.push(largeFont-.2*largeFont + Math.random()*.4*largeFont);
        var bColor = "";
       if (dataElem.find('.big-color')) {
          sColor = dataElem.find('.big-color').text();
        }
        cols.push(generateColors(bColor));
      }
    }
    for (var j in mediumWords) {
      if (mediumWords[j]!="") {
        allWords.push(mediumWords[j]);
        sizes.push(largeFont*.5-.2*largeFont*.5 + Math.random()*.4*largeFont*.5);
        var mColor = "";
       if (dataElem.find('.medium-color')) {
          sColor = dataElem.find('.medium-color').text();
        }
        cols.push(generateColors(mColor));
      }
    }
    for (var h in smallWords) {
      if (smallWords[h]!="") {
       allWords.push(smallWords[h]);
       sizes.push(largeFont*.3-.2*largeFont*.3 + Math.random()*.4*largeFont*.3);
       var sColor = "";
       if (dataElem.find('.small-color')) {
          sColor = dataElem.find('.small-color').text();
        }
        cols.push(generateColors(sColor));
      }
    }
    console.log("colors: " + cols);
    var numberShown = 0;
    var colors = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"];
    d3.layout.cloud().size([width, height])
      .words(d3.zip(allWords, sizes).map(function(d) {
           return {text: d[0], size: d[1]};
      }))
      .rotate(function() { return Math.random() * 180-90; })
      .fontSize(function(d) { return d.size; })
      .on("end", draw)
      .start();
    function draw(words) {
      d3.select(".thewordcloud").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width/2 + "," + height/2+ ")")
        .selectAll("text")
        .data(words, function(d){return d;})
        .enter().append("text")
        .style("font-size", function(d) {return d.size + "px"; })
        .style("fill",function(d) {return cols[numberShown++];})
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
      console.log("actual shown: " + numberShown + "actual Words: " + allWords.length);
    }
  });
});
