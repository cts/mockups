@html widget relative(choropleth.html);
@js relative(index.js);

.usa-choropleth :graft widget | #usa;

widget | .width :is .width;
widget | .height :is .height;

widget | .states :are .my-states;
widget | .states .row span:nth-child(1) :is .my-states .row span:nth-child(1);
widget | .states .row span:nth-child(2) :is .my-states .row span:nth-child(2);
widget | .states .row span:nth-child(3) :is .my-states .row span:nth-child(3);
