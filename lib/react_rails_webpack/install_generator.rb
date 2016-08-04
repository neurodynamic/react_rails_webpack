require 'rails/generators/base'
require 'fileutils'

module ReactRailsWebpack
  class InstallGenerator < Rails::Generators::Base
    desc "This generator sets up the files for a rails and react integration using webpack."

    def source_paths
      Array(super) +
        [File.join(File.expand_path(File.dirname(__FILE__)), 'react_rails_webpack')]
    end

    def setup_client_folder
      FileUtils.mkdir_p 'client'

      inside 'client' do
        directory 'client'
      end
    end

    def add_react_helper
      inside 'app' do
        inside 'helpers' do
          copy_file 'react_helper.rb'
        end
      end
    end

    def update_gitignore
      append_to_file '.gitignore' do
        "\n\n\# react_rails_webpack ignores\nclient/node_modules\nclient/environment.json"
      end
    end

    def add_webpack_asset_inclusion
      # Add webpack folder to application asset paths
      insert_into_file(
        'config/application.rb',
        "    config.assets.paths << \"#{config.root}/app/assets/webpack\"\n",
        after: "  class Application < Rails::Application\n"
      )

      # Add webpack folder require to application.js
      insert_into_file(
        'app/assets/javascripts/application.js',
        "//= require_tree ../webpack\n",
        after: "//= require_tree .\n"
      )

      # Add webpack folder require to application.css or .scss or .sass
      if File.exist?('app/assets/stylesheets/application.css')
        insert_into_file(
          'app/assets/stylesheets/application.css',
          "\n *= require_tree ../webpack\n",
          before: ' *= require_self'
        )
      elsif File.exist?('app/assets/stylesheets/application.sass')
        prepend_to_file('app/assets/stylesheets/application.sass', "@import '../webpack/*\n")
      elsif File.exist?('app/assets/stylesheets/application.scss')
        prepend_to_file('app/assets/stylesheets/application.scss', "@import '../webpack/*\n")
      end
    end
  end
end
