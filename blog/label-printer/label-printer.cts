/*
 * Label Printer
 * =============
 *
 * Adapted from Zach Hollman's theme by Ted Benson
 *
 * Resources
 * ---------
 */


@css http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz;
@css relative(label-printer.css);
@js http://code.jquery.com/jquery-2.0.3.min.js;


/* Trees:
 *  default -> default.html
 *  mockup -> one of index.html, list,html, page.html, or post.html
 *
 * (Target)             <----      (Source)
 * Content Selectors   Relation    Mockup Selectors
 * ------------------- ---------   ------------------
 */

mockup | #sidebar      :graft      default | #sidebar;
mockup | footer        :graft      default | footer;
