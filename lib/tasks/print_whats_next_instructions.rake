require 'colorize'

namespace :react_rails_webpack do
  task :print_whats_next_instructions do
    puts
    puts "-" * `tput cols`.to_i # print line of dashes
    puts
    puts "DONE!"
    puts
    puts "Okay, #{'if you saw any errors'.red.bold} when the \
#{'npm run install'.white.bold} and #{'npm run build'.white.bold} commands \
were run just now, try running them again now manually."
    puts
    puts "#{"If you didn't get any errors".red.bold} you should be good to go, and \
you can start your live-reloading webpack development server for React \
by running the #{'npm run start'.white.bold} command and visiting \
#{(`scutil --get LocalHostName`.strip+'.local:3000').blue.bold} in your browser \
or on any other device on your local network (for example: your phone)."
    puts
    puts "#{'To generate an example page of React components inside your Rails app'.red.bold}, \
run the #{'rails g react_rails_webpack:create_example_page'.white.bold} command."
    puts
    puts "-" * `tput cols`.to_i # print line of dashes
    puts
  end
end
