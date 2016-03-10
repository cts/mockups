@html line relative(line.html);
@css relative(line.css);
@js relative(index.js);

.line-chart-container :graft line | #line-chart-container;

line | .y-label :is .y-label;