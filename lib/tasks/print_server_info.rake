namespace :react_rails_webpack do
  task :print_server_info do
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
