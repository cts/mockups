@css http://fonts.googleapis.com/css?family=Ubuntu:400,700&amp;
@css http://wp-themes.com/wp-content/themes/iconic-one/style.css?ver=3.7-alpha-25343;
@css http://wp-themes.com/wp-content/themes/iconic-one/custom.css?ver=3.7-alpha-25343;
@css relative(iconic-one.css);
@js http://wp-themes.com/wp/wp-includes/js/jquery/jquery.js?ver=1.10.1;
@js http://wp-themes.com/wp-content/themes/iconic-one/js/selectnav.js?ver=1.0;

/* And then graft the mockup into the current page
 *
 * (Target)                                 <----     (Source)
 * Content Selectors                      Relation    Mockup Selectors
 * ------------------------------------   ---------   ------------------
 */

mockup | #masthead                          :graft   default | #masthead;
mockup | #primary                           :graft   default | #secondary;
mockup | #colophon                          :graft   default | #colophon;
