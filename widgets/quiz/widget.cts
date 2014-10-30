@html widget relative(mockup.html);
@css relative(mockup.css);
/*@js relative(example.js);*/

.quiz :graft widget | #quiz-widget ;

widget | .questions :are .questions ;

widget | .questions > li :is .questions > span ;

widget | .questions > ol :are .questions > div ;

widget | .questions > ol > li :is .questions > div > span ;