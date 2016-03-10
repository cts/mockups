@html stacked relative(stacked.html);
@css relative(stacked.css);

.stacked-bar-chart-container :graft stacked | #stacked-bar-chart-container;

stacked | .y-label :is .y-label;