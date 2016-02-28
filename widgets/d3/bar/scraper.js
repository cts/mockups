function scrape() {
  var data = [];
  $(".data .row").each(function(index, value) {
    var values = $(value).find("span");
    var obj = {
      "letter": $(values[0]).text(),
      "frequency": parseFloat($(values[1]).text())
    }
    data.push(obj)
  });

  return data
}