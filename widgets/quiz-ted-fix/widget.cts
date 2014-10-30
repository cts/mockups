@html widget relative(mockup.html);
@css relative(mockup.css);
/*@js relative(example.js);*/

.quiz :graft widget | #quiz-widget ;

widget | .questions :are .questions ;

widget | .questions > li > .q :is .questions > div > span ;

widget | .questions > li > ol :are .questions > div > div ;

widget | .questions > li > ol > li :is .questions > div > div > span ;