module Jekyll
  class CatsAndTags < Generator
    def generate(site)
      site.categories.each do |category|
        build_subpages(site, "category", category)
      end
      
      site.tags.each do |tag|
        build_subpages(site, "tag", tag)
      end
    end
      
    def build_subpages(site, type, posts) 
      posts[1] = posts[1].sort_by { |p| -p.date.to_f }     
      atomize(site, type, posts)
    end
      
    def atomize(site, type, posts)
      path = "/#{type}/#{posts[0]}"
      atom = AtomPage.new(site, site.source, path, type, posts[0], posts[1])
      site.pages << atom
    end 
    
    class AtomPage < Page
      def initialize(site, base, dir, type, val, posts)
        @site = site
        @base = base
        @dir = dir
        @name = 'index.html'
    
        self.process(@name)
        self.read_yaml(File.join(base, '_layouts'), "tagcat.html")
        self.data[type] = val
        self.data["type"] = type
        self.data["posts"] = posts
      end
    end
    
  end
end