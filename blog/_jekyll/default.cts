default | .site-title                            :is      #site-title;
default | .site-title a {attribute:href}         :is      #site-title .home-link {attribute:href};
default | .home-link {attribute:href}            :is      .home-link {attribute:href};
default | .site-description                      :is      #site-description;
mockup | .site-description                      :is      #site-description;
default | .menu > ul                             :is      #nav-main > ul;
default | .menu > ul > li                        :is      #nav-main > ul > li;
default | .menu .children                        :are     #nav-main > ul > li > ul;
default | .menu a                                :is      #nav-main a;
default | .menu a {attribute:href}               :is      #nav-main a {attribute:href};
default | #recent-posts ul                       :are     #recent-posts;
default | #recent-posts li a                     :is      #recent-posts a;
default | #recent-posts li a {attribute:href}    :is      #recent-posts a {attribute:href};
default | #archives ul                           :are     #archives;
default | #archives li a                         :is      #archives a;
default | #archives li a {attribute:href}        :is      #archives a {attribute:href};
default | #categories ul                         :are     #categories;
default | #categories li a                       :is      #categories a;
default | #categories li a {attribute:href}      :is      #categories a {attribute:href};