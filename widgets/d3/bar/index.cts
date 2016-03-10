@html bar relative(bar.html);
@css relative(bar.css);

.bar-chart-container :graft bar | #widget-container;

bar | .data :are .myData;

bar | .row span:first-child :is .myData span:first-child;

bar | .row span:last-child :is .myData span:last-child;

bar | .y-label :is .y-label;