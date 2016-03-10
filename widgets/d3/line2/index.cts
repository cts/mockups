@html line relative(line.html);
@css relative(line.css);

.line-chart-container :graft line | #line-chart-container;

line | .data :are .myData;

line | .row span:first-child :is .myData span:first-child;

line | .row span:last-child :is .myData span:last-child;

line | .y-label :is .y-label;