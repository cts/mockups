@html widget relative(mockup.html);
@js relative(widget.js);

.modal-widget :graft widget | #main ;

widget | #modal-link :is .modal-link-text ;
widget | #modal-link-content :is .modal-link-content ;