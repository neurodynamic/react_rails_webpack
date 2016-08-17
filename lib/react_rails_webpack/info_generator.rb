require 'rails/generators/base'
require 'colorize'

module ReactRailsWebpack
  class InfoGenerator < Rails::Generators::Base
    desc "This generator provides basic info about the react_rails_webpack integration."

    source_root(File.join(File.expand_path(File.dirname(__FILE__))))

    def print_info
      puts
      puts "-" * `tput cols`.to_i # print line of dashes
      puts
      puts "To run a live-reloading webpack server for you React \
components, run #{'npm run start'.white.bold}, then go to #{(`scutil --get LocalHostName`.strip + '.local:3000').blue.bold}"
      puts
      puts "-" * `tput cols`.to_i # print line of dashes
      puts
    end
  end
end
