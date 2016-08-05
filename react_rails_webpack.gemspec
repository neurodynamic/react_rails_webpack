# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'react_rails_webpack/version'

Gem::Specification.new do |spec|
  spec.name          = "react_rails_webpack"
  spec.version       = ReactRailsWebpack::VERSION
  spec.authors       = ["Neurodynamic"]
  spec.email         = ["neurodynamicdev@gmail.com"]

  spec.summary       = %q{A gem supplying generators to setup flexible integrations of react, webpack, and redux with Rails}
  # spec.description   = %q{TODO: Write a longer description or delete this line.}
  spec.homepage      = "https://github.com/neurodynamic/react_rails_webpack"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  # spec.add_dependency("railties", ">= 4.1.0", "< 5.1")
  spec.add_dependency("rails", ">= 4")
  spec.add_dependency "colorize", ">= 0.7.7"
  spec.add_development_dependency "bundler", "~> 1.11"
  spec.add_development_dependency "rake", "~> 10.0"
end
