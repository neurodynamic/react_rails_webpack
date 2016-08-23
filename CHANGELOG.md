## Changelog

### 3.0.1
  - Add react-hmre preset to development environment in .babelrc file

### 3.0.0
  - MANY BIG CHANGES
  - Trim package.json dependencies
  - Update package.json dependency versions
  - Remove npm "prebuild" command from package.json
  - Replace "minify" webpack option with custom UglifyJS options
  - Depend on main hjs-webpack repo instead of customized fork (UglifyJS options enabled this)
  - Add .babelrc file
  - Correct broken redux test
  - Start keeping a changelog

To upgrade to version 3, update the gem version in your `Gemfile` to version 3, run `bundle install`, delete the `client/node_modules` directory, and run the `rails g react_rails_webpack:install` generator command again, and when it asks, refuse to overwrite the `availableComponents.js` file and any React component files you've changed.