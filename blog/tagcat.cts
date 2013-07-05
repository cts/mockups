
/* Map the page content onto the mockup  
 * 
 * Note that relations are performed in Target <--- Source direction.
 *
 * (Target)                                <----      (Source)
 * Mockup Selectors                       Relation    Content Selectors
 * ------------------------------------   ---------   ------------------
 */

tagcat | .page-title .index-type               :is    h2.index-type;
tagcat | .page-title .index-cat               :is    h2.index-cat;

tagcat | article .entry-title-inner                  :is      #article-list article .entry-title a;
tagcat | article .entry-title a {attribute:href} :is      #article-list article .entry-title a {attribute:href};
tagcat | article .entry-title {attribute:href} :is      #article-list article .entry-title a {attribute:href};
tagcat | article .entry-content                :is      #article-list article .entry-content;
tagcat | article .post-date                          :is      #article-list article .post-date;
tagcat | article .cat-links                    :is      #article-list article .cat-links;
tagcat | article .cat-links a {attribute:href} :is      #article-list article .cat-links a {attribute:href};
tagcat | article .tags-links                   :is      #article-list article .tags-links;
tagcat | #article-list                              :are      #article-list;

tagcat | .site-title                         :is      body > #page > h1;
tagcat | .site-description                   :is      body > #page > h2;
tagcat | .menu > ul                          :is      #nav > ul;
tagcat | .menu > ul > li                     :is      #nav > ul > li;
tagcat | .menu .children                     :are     #nav> ul > li > ul;
tagcat | .menu a                             :is      #nav a;
tagcat | .menu a {attribute:href}            :is      #nav a {attribute:href};
tagcat | #recent-posts ul                  :are     #recentPosts;
tagcat | #recent-posts li a                :is      #recentPosts a;
tagcat | #recent-posts li a {attribute:href} :is    #recentPosts a {attribute:href};
tagcat | #archives ul                      :are     #archives;
tagcat | #archives li a                    :is      #archives a;
tagcat | #archives li a {attribute:href}   :is      #archives a {attribute:href};
tagcat | #categories ul                    :are     #categories;
tagcat | #categories li a                  :is      #categories a;
tagcat | #categories li a {attribute:href} :is      #categories a {attribute:href};





/* And then graft the mockup into the current page
 *
 * (Target)                                 <----     (Source)
 * Content Selectors                      Relation    Mockup Selectors
 * ------------------------------------   ---------   ------------------
 */
#article-list article                     :graft   tagcat | article;
#page                                       :graft   tagcat | #page;
