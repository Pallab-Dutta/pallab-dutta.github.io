module Jekyll
  class ScholarGenerator < Generator
    def generate(site)
      require 'scholar'
      pubs = Scholar.fetch('HUXqGAcAAAAJ')
      site.data['publications'] = pubs
    end
  end
end