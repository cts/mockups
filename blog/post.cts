

/* Map the page content onto the mockup  
 * 
 * Note that relations are performed in Target <--- Source direction.
 *
 * (Target)                                <----      (Source)
 * Mockup Selectors                       Relation    Content Selectors
 * ------------------------------------   ---------   ------------------
 */


post | .site-title                         :is      body > #page > h1; 
post | .site-description                   :is      body > #page > h2;
post | .menu > ul                          :is      #nav > ul;
post | .menu > ul > li                     :is      #nav > ul > li;
post | .menu .children                     :are     #nav> ul > li > ul;
post | .menu a                             :is      #nav a;
post | .menu a {attribute:href}            :is      #nav a {attribute:href};
post | #recent-posts ul                  :are     #recentPosts;
post | #recent-posts li a                :is      #recentPosts a;
post | #recent-posts li a {attribute:href} :is    #recentPosts a {attribute:href};
post | #archives ul                      :are     #archives;
post | #archives li a                    :is      #archives a;
post | #archives li a {attribute:href}   :is      #archives a {attribute:href};
post | #categories ul                    :are     #categories;
post | #categories li a                  :is      #categories a;
post | #categories li a {attribute:href} :is      #categories a {attribute:href};
post | article                                :is      #individual-article;
post | article .entry-title                   :is      #individual-article .entry-title;
post | article .entry-content                 :is      #individual-article .entry-content;
post | article .post-date                     :is      #individual-article .post-date;
post | article .cat-links a                   :is      #individual-article .cat-links;
post | article .cat-links a {attribute:href}  :is      #individual-article .cat-links {attribute:href};
post | article .tags-links                    :is      #individual-article .tags-links;





/* And then graft the mockup into the current page
 *
 * (Target)                                 <----     (Source)
 * Content Selectors                      Relation    Mockup Selectors
 * ------------------------------------   ---------   ------------------
 */
#page                                          :graft   post | #page;
#page {attribute:class}                        :is   post | #page {attribute:class};
#individual-article                           :graft   post | article;