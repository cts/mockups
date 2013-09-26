/*
 * Label Printer Blog Theme
 * ========================
 *
 * Adapted from Zach Hollman's theme by Ted Benson <eob@csail.mit.edu>
 *
 * Resources
 * ---------
 */

@css http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz;
@css relative(label-printer.css);
@js http://code.jquery.com/jquery-2.0.3.min.js;
@html common /common.html;

/* Trees
 * ------
 *  default: default.html
 *  mockup:  one of index.html, list,html, page.html, or post.html
 *
 * (Target)             <----      (Source)
 * Content Selectors   Relation    Mockup Selectors
 * ------------------- ---------   ------------------
 */

mockup | #sidebar      :graft      default | #sidebar;
mockup | #content      :graft      default | #content;

default | .content     :is         mockup | #content;
default | #sidebar     :is         mockup | #sidebar;

/*
 * Common Assets
 */

default | a.home-link h1 :is common | .blog-name;
default | nav ul :are common | .pages;
default | nav ul li a :is common | .pages li a;

