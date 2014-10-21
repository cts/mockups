@html widget relative(widget.html);

.barchart :graft widget | #chart;

/* Properties */

widget | .properties > .height :is .properties > .height;
widget | .properties > .width :is .properties > .width;

widget | .series > tbody           :are .series > tbody;
widget | .series > tbody > tr      :are .series > tbody > tr;
widget | .series > tbody > tr > td :is  .series > tbody > tr > td;

