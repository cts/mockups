

/* Map the page content onto the mockup  
 * 
 * Note that relations are performed in Target <--- Source direction.
 *
 * (Target)                                <----      (Source)
 * Mockup Selectors                       Relation    Content Selectors
 * ------------------------------------   ---------   ------------------
 */


page | .site-title                         :is      body > #page > h1; 
page | .site-description                   :is      body > #page > h2;
page | .menu > ul                          :is      #nav > ul;
page | .menu > ul > li                     :is      #nav > ul > li;
page | .menu .children                     :are     #nav> ul > li > ul;
page | .menu a                             :is      #nav a;
page | .menu a {attribute:href}            :is      #nav a {attribute:href};
page | #recent-posts ul                  :are     #recentPosts;
page | #recent-posts li a                :is      #recentPosts a;
page | #recent-posts li a {attribute:href} :is    #recentPosts a {attribute:href};
page | #archives ul                      :are     #archives;
page | #archives li a                    :is      #archives a;
page | #archives li a {attribute:href}   :is      #archives a {attribute:href};
page | #categories ul                    :are     #categories;
page | #categories li a                  :is      #categories a;
page | #categories li a {attribute:href} :is      #categories a {attribute:href};





/* And then graft the mockup into the current page
 *
 * (Target)                                 <----     (Source)
 * Content Selectors                      Relation    Mockup Selectors
 * ------------------------------------   ---------   ------------------
 */

#page                                          :graft   index | #page;