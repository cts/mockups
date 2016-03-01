@html box relative(box.html);
@css relative(box.css);

.box-plot-container :graft box | #widget-container;

box | .data :are .box-plot-container .data;

box | .data .row span:nth-child(1) :is .box-plot-container .data .row span:nth-child(1);
box | .data .row span:nth-child(2) :is .box-plot-container .data .row span:nth-child(2);
box | .data .row span:nth-child(3) :is .box-plot-container .data .row span:nth-child(3);
