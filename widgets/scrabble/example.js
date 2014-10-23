CTS.loaded.then(function() {
  CTS.on('cts-received-graft', function(evt) {
  
    var ctsNode = evt.target;
    var jqNode = ctsNode.value;

	// Stackoverflow
	String.prototype.shuffle = function () {
	    var a = this.split(""),
	        n = a.length;

	    for(var i = n - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var tmp = a[i];
	        a[i] = a[j];
	        a[j] = tmp;
	    }
	    return a.join("");
	}

	var current = jqNode.find('.word').html();
	jqNode.find('.word').html(current.shuffle());

	jqNode.find('.guess').keypress(function(e) {
		if(e.which == 13) {
			if(jqNode.find('.guess').val() == current){
				jqNode.find('.x').hide();
				jqNode.find('.check').show();
				
			} else {
				jqNode.find('.check').hide();
				jqNode.find('.x').show();
				jqNode.find('.guess').val('');
			}
		}
	});
  });
});