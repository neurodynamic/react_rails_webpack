require 'rails/generators/base'

module ReactRailsWebpack
  class TrailblazerIntegrationGenerator < Rails::Generators::Base
    desc "This generator adds a react_cell file to use in a Trailblazer/Rails app."

    source_root(File.join(File.expand_path(File.dirname(__FILE__))))

    def add_react_cell_file_to_lib
      inside 'lib' do
        copy_file 'react_cell.rb'
      end
    end
  end
end
