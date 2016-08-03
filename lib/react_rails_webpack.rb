require 'react_rails_webpack/version'
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

    def add_webpack_asset_path
      # //= require_tree ../webpack
      # @import '../webpack/react-client.1.0.0'
      # config.assets.paths << "#{config.root}/app/assets/webpack"
    end
  end
end
