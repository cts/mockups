@html scatterplot relative(scatterplot.html);
@css relative(scatterplot.css);

.scatterplot-container :graft scatterplot | #scatterplot-container;

scatterplot | .x-label :is .x-label;
scatterplot | .y-label :is .y-label;