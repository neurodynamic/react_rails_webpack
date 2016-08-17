require 'rails/generators/base'
require 'colorize'

module ReactRailsWebpack
  class WhatsNextGenerator < Rails::Generators::Base
    desc "This generator instructs the user on what to do \
once the react_rails_webpack:install generator is done running."

    source_root(File.join(File.expand_path(File.dirname(__FILE__))))

    def say_whats_next
      puts
      puts "-" * `tput cols`.to_i # print line of dashes
      puts
      puts "Okay, #{'if you saw any errors'.red} when the \
#{'npm run install'.white} and #{'npm run build'.white} commands \
were run just now, try running them again manually."
      puts
      puts "#{"If you didn't get any errors".red} you should be good to go, and \
you can start your live-reloading webpack development server for React \
by running the #{'npm run start'.white} command and visiting \
#{(`scutil --get LocalHostName`+'.local:3000').blue} in your browser \
or any other device on your local network."
      puts
      puts "#{'To generate an example page of React components in your Rails app'.red}, \
run the #{'rails g react_rails_webpack:create_example_page'.white} command."
      puts
      puts "-" * `tput cols`.to_i # print line of dashes
      puts

    end
  end
end