require 'rails/generators/base'
require 'fileutils'

module ReactRailsWebpack
  class CreateExamplePageGenerator < Rails::Generators::Base
    source_root(File.join(File.expand_path(File.dirname(__FILE__))))

    def add_files
      inside 'app' do
        inside 'controllers' do
          copy_file 'react_example_controller.rb'
        end

        inside 'views' do
          FileUtils.mkdir_p 'react_example'

          inside 'react_example' do
            copy_file 'greeting.html.erb'
          end
        end
      end
    end

    def add_route
      insert_into_file(
        'config/routes.rb',
        "  get 'greeting' => 'react_example#greeting'\n",
        after: "Rails.application.routes.draw do\n"
      )
    end
  end
end
