CTS.loaded.then(function() {
  CTS.on('cts-received-graft', function(evt) {
  
    var ctsNode = evt.target;
    var jqNode = ctsNode.value;

  });
});