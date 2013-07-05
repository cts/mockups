@html madden relative(home.html);

content | .body                :graft       madden  | .body;

madden | .research            :is          content | .research;

/*
 * Navigation Links
 */
madden | .navlinks-wrapper    :if-exist    content | .navlinks;
madden | .navlinks            :are         content | .navlinks;
madden | .navlink a           :is          content | .navlinks a;
madden | .navlink a { attribute : href } :is          content | .navlinks a { attribute: href };

/*
 * Contact Info
 */

madden | .name                :is          content | .name;
madden | .jobtitle            :is          content | .jobtitle;
madden | .headshot { attribute: src } :is  content | .headshot { attribute: src };
madden | .contact-info        :is          content | .contact-info;

/*
 * Short Blurb and Bio
 */

madden | .short-blurb-wrapper :if-exist   content | .short-blurb;
madden | .short-blurb         :is         content | .short-blurb;
madden | .bio-wrapper         :if-exist   content | .bio;
madden | .bio                 :is         content | .bio;


/*
 * Teaching, Students, Research, Awards
 */
madden | .teaching-wrapper    :if-exist   content | .teaching;
madden | .teaching            :is         content | .teaching;
madden | .students-wrapper    :if-exist   content | .students;
madden | .students            :is         content | .students;
madden | .research-wrapper    :if-exist   content | .research;
madden | .research            :is         content | .research;
madden | .awards-wrapper      :if-exist   content | .awards;
madden | .awards              :is         content | .awards;

/*
 * Misc Blocks
 */

madden | .misc-wrapper      :if-exist   content | .sections;
madden | .misc-blocks       :are        content | .sections;
madden | .misc-blocks section h2    :is         content | .sections section h2;
madden | .misc-blocks section div :is   content | .sections section .section-content;


