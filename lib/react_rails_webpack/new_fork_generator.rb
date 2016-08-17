require 'rails/generators/base'
require 'colorize'

module ReactRailsWebpack
  class NewForkGenerator < Rails::Generators::Base
    desc "This generator sets up the environment.json file for react/rails integration in a Rails app."

    source_root(File.join(File.expand_path(File.dirname(__FILE__))))

    def copy_environment_json_file
      inside 'client' do
        copy_file 'environment.json'
      end
    end

    def set_environment_hostname

      localhost_name = `scutil --get LocalHostName`.strip
      puts "Setting localhost name to #{localhost_name}..."

      gsub_file 'client/environment.json', /<<<LOCALHOST_NAME>>>/, localhost_name
    end
  end
end