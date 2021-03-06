@css http://fonts.googleapis.com/css?family=Source+Sans+Pro%3A300%2C400%2C700%2C300italic%2C400italic%2C700italic%7CBitter%3A400%2C700&#038;
@css http://wp-themes.com/wp-content/themes/twentythirteen/fonts/genericons.css?ver=2.09;
@css http://wp-themes.com/wp-content/themes/twentythirteen/style.css?ver=2013-07-18;
@css relative(twenty-thirteen.css);
@js http://wp-themes.com/wp/wp-includes/js/jquery/jquery.js?ver=1.10.2;
@js http://wp-themes.com/wp/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.2.1;
@js http://wp-themes.com/wp/wp-includes/js/jquery/jquery.masonry.min.js?ver=2.1.05;
@js http://wp-themes.com/wp-content/themes/twentythirteen/js/functions.js?ver=2013-07-18;


/* And then graft the mockup into the current page
 *
 * (Target)                                 <----     (Source)
 * Content Selectors                      Relation    Mockup Selectors
 * ------------------------------------   ---------   ------------------
 */

mockup | #masthead                          :graft   default | #masthead;
mockup | .site-footer                       :graft   default | .site-footer;
default | .home-link {attribute:href}       :is      .home-link {attribute:href};
default | .site-title                       :is      #site-title;