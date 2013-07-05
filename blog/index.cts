

/* Map the page content onto the mockup  
 * 
 * Note that relations are performed in Target <--- Source direction.
 *
 * (Target)                                <----      (Source)
 * Mockup Selectors                       Relation    Content Selectors
 * ------------------------------------   ---------   ------------------
 */

index | article .entry-title-inner                  :is      #article-list article .entry-title a;
index | article .entry-title a {attribute:href} :is      #article-list article .entry-title a {attribute:href};
index | article .entry-title {attribute:href} :is      #article-list article .entry-title a {attribute:href};
index | article .entry-content                :is      #article-list article .entry-content;
index | article .post-date                          :is      #article-list article .post-date;
index | article .cat-links                    :is      #article-list article .cat-links;
index | article .cat-links a {attribute:href} :is      #article-list article .cat-links a {attribute:href};
index | article .tags-links                   :is      #article-list article .tags-links;
index | #content                              :is      #article-list;
index | .site-title                         :is      body > #page > h1; 
index | .site-description                   :is      body > #page > h2;
index | .menu > ul                          :is      #nav > ul;
index | .menu > ul > li                     :is      #nav > ul > li;
index | .menu .children                     :are     #nav> ul > li > ul;
index | .menu a                             :is      #nav a;
index | .menu a {attribute:href}            :is      #nav a {attribute:href};
index | #recent-posts ul                  :are     #recentPosts;
index | #recent-posts li a                :is      #recentPosts a;
index | #recent-posts li a {attribute:href} :is    #recentPosts a {attribute:href};
index | #archives ul                      :are     #archives;
index | #archives li a                    :is      #archives a;
index | #archives li a {attribute:href}   :is      #archives a {attribute:href};
index | #categories ul                    :are     #categories;
index | #categories li a                  :is      #categories a;
index | #categories li a {attribute:href} :is      #categories a {attribute:href};





/* And then graft the mockup into the current page
 *
 * (Target)                                 <----     (Source)
 * Content Selectors                      Relation    Mockup Selectors
 * ------------------------------------   ---------   ------------------
 */
#article-list article                         :graft index | article;
#article-list .articlewrapper                 :graft   index | .articlewrapper;
#page                                          :graft   index | #page;

