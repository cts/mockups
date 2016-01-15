function colorState(node) {
  var max = 55;
  var abbreviation = $(node).find("td")[1].innerHTML;
  var opacity = parseInt($(node).find("td")[2].innerHTML) / max;
  $("#" + abbreviation).css("fill", "blue");
  $("#" + abbreviation).css("opacity", opacity);
}

function colorMap(widget) {
  var nodes = widget.find(".states tr");
  nodes.each(function(index, node) {
    colorState(node);
  });
}

CTS.loaded.then(function() {
  CTS.on('cts-received-graft', function(event) {
    var widget = event.target.value;
    colorMap(widget);
  });
});