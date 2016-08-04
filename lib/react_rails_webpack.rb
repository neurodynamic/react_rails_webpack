require 'react_rails_webpack/version'

module ReactRailsWebpack
  generators do
    require_relative 'react_rails_webpack/install_generator'
    require_relative 'react_rails_webpack/example_generator'
  end
end
