require 'react_rails_webpack/version'

module ReactRailsWebpack
  class ReactRailsWebpackRailtie < Rails::Railtie
    generators do
      require_relative 'react_rails_webpack/install_generator'
      require_relative 'react_rails_webpack/new_fork_generator'
      require_relative 'react_rails_webpack/create_example_page_generator'
      require_relative 'react_rails_webpack/trailblazer_integration_generator'
    end

    rake_tasks do
      spec = Gem::Specification.find_by_name 'react_rails_webpack'
      load "#{spec.gem_dir}/lib/tasks/print_server_info.rake"
      load "#{spec.gem_dir}/lib/tasks/print_whats_next_instructions.rake"
    end
  end
end
