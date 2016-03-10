function scrape() {
  var data = [];
  $(".data .row").each(function(index, value) {
    var values = $(value).find("span");
    var obj = {
      "key": $(values[0]).text(),
      "value": parseFloat($(values[1]).text())
    }
    data.push(obj)
  });

  return {
    "data": data,
    "yLabel": $(".y-label").text()
  }
}