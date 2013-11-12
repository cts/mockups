@html mockuprelative(home.html);

content | .body              :graft       mockup | .body;

mockup| .research            :is          content | .research;

/*
 * Navigation Links
 */
mockup| .navlinks-wrapper    :if-exist    content | .navlinks;
mockup| .navlinks            :are         content | .navlinks;
mockup| .navlink a           :is          content | .navlinks a;
mockup| .navlink a { attribute : href } :is          content | .navlinks a { attribute: href };

/*
 * Contact Info
 */

mockup| .name                :is          content | .name;
mockup| .jobtitle            :is          content | .jobtitle;
mockup| .headshot { attribute: src } :is  content | .headshot { attribute: src };
mockup| .contact-info        :is          content | .contact-info;

/*
 * Short Blurb and Bio
 */

mockup| .short-blurb-wrapper :if-exist   content | .short-blurb;
mockup| .short-blurb         :is         content | .short-blurb;
mockup| .bio-wrapper         :if-exist   content | .bio;
mockup| .bio                 :is         content | .bio;


/*
 * Teaching, Students, Research, Awards
 */
mockup| .teaching-wrapper    :if-exist   content | .teaching;
mockup| .teaching            :is         content | .teaching;
mockup| .students-wrapper    :if-exist   content | .students;
mockup| .students            :is         content | .students;
mockup| .research-wrapper    :if-exist   content | .research;
mockup| .research            :is         content | .research;
mockup| .awards-wrapper      :if-exist   content | .awards;
mockup| .awards              :is         content | .awards;

/*
 * Misc Blocks
 */

mockup| .misc-wrapper      :if-exist   content | .sections;
mockup| .misc-blocks       :are        content | .sections;
mockup| .misc-blocks section h2    :is         content | .sections section h2;
mockup| .misc-blocks section div :is   content | .sections section .section-content;

