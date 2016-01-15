@html pie relative(pie.html);
@js relative(index.js);

.pie :graft pie | #pie-container;

pie | #data :is .data;