require 'react_rails_webpack/version'

module ReactRailsWebpack
  class ReactRailsWebpackRailtie < Rails::Railtie
    generators do
      require_relative 'react_rails_webpack/install_generator'
      require_relative 'react_rails_webpack/new_fork_generator'
      require_relative 'react_rails_webpack/whats_next_generator'
      require_relative 'react_rails_webpack/create_example_page_generator'
      require_relative 'react_rails_webpack/trailblazer_integration_generator'
    end
  end
end
