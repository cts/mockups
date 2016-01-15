@html widget relative(choropleth.html);
@js relative(index.js);

.usa-choropleth :graft widget | #usa;

widget | .width :is .width;
widget | .height :is .height;

widget | .states :is .my-states;