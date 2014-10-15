@html widget relative(word-cloud.html);
@js relative(cts-cloud.js);

.word-cloud :graft widget | #cloud ;

widget | .big-words :is .big-words ;
widget | .big-color :is .big-color ;

widget | .medium-words :is .medium-words ;
widget | .medium-color :is .medium-color ;

widget | .small-words :is .small-words ;
widget | .small-color :is .small-color ;

widget | .properties :is .properties;

