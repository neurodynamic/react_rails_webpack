require 'rails/generators/base'

module ReactRailsWebpack
  class TrailblazerIntegrationGenerator < Rails::Generators::Base
    source_root(File.join(File.expand_path(File.dirname(__FILE__))))

    def add_files
      inside 'app' do
        inside 'lib' do
          copy_file 'react_cell.rb'
        end
      end
    end
  end
end
