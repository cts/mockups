function scrape() {
  var data = [];
  var min = Infinity,
      max = -Infinity;
  $(".data .row").each(function(index, value) {
    var values = $(value).find("span");
    var e = Math.floor(parseInt($(values[0]).text()) - 1),
        r = Math.floor(parseInt($(values[1]).text()) - 1),
        s = Math.floor(parseInt($(values[2]).text())),
        d = data[e];

    if (!d) {
      data[e] = [s];
    }
    else {
      d.push(s);
    }

    if (s > max) {
      max = s;
    }
    if (s < min) {
      min = s;
    }
  });

  return {
    "data": data,
    "max": max,
    "min": min
  }
}