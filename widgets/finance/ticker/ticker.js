if (typeof CTS.Widgets == 'undefined') {
  CTS.Widgets = {};
}

CTS.Widgets.Ticker = function(node) {
  var root = node.value;
  if (root == null) {
    // Error
    return;
  }

  var tickerName = root.find(".tickerName").first().html();
  var tickerValue = root.find(".tickerValue").first();
  var yql = "http://query.yahooapis.com/v1/public/yql?callback=?";
  var stockdb = "http://datatables.org/alltables.env";
  var query = "select * from yahoo.finance.quotes where symbol in ('" + tickerName + "')";
  
  var ajax = CTS.$.getJSON(yql, { "format": "json", "env": stockdb, "q": query});
  ajax.done(function(resp) {
    if (typeof resp.query != "undefined") {
      if ((typeof resp.query.results != "undefined") && (resp.query.results != null)) {
        if (typeof resp.query.results.quote != "undefined") {
          var ask = resp.query.results.quote.Ask;
          var change = resp.query.results.quote.Change;
          var changeInt = parseInt(change);
          var up = changeInt > 0;
          var even = changeInt == 0;
          var str = "&nbsp;$" + ask + "&nbsp;";
          if (!even) {
            if (up) {
              str = str + ' <' + 'span style="font-size: 0.8em; color: green;">&#x25b2;<' + '/span>';
              str = str + ' <' + 'span style="color: green; margin-right: 0; padding-right:0;">' + change + '<' + '/span>';
            } else {
              str = str + ' <' + 'span style="font-size: 0.8em; color: red;">&#x25bc;<' + '/span>';
              str = str + ' <' + 'span style="color: red; margin-right:0; padding-right:0;">' + change + '<' + '/span>';
            }
          } else {
            str = str + "&bull;";
            str = str + " " + change;
          }
          tickerValue.html(str);
        }
      }
    }
  });
};


/*
 * Listen for graft events and if it is the graft event from this widget,
 * then run the javascript.
 */
CTS.on('received-graft', function() {
}

CTS.$('body').on('received-graft', function(data) {
  if (typeof data.relation != 'undefined') {
    if (typeof data.relation.spec.opts.name != 'undefined') {
      if (data.relation.spec.opts.name == 'tickerGraft') {
        CTS.Widgets.Ticker(data.target);
      }
    }
  }
});
