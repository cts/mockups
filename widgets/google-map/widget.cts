@html widget relative(widget.html);
@js relative(widget.js);

.main :graft widget | #main ;

widget | h1 :is .shoutout ; 

widget | .properties :is .properties ;

widget | .markers :is .markers ;