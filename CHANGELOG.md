## Changelog

### 3.1.0
  - Improve look of example components
  - Add examples of using Font Awesome and image files

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

**To upgrade to version 3**, update the gem version in your `Gemfile` to version 3, run `bundle install`, delete the `client/node_modules` directory, and run the `rails g react_rails_webpack:install` generator command again, and when it asks, refuse to overwrite the `availableComponents.js` file and any React component files you've changed.

There are some important changes to `webpack.config.js` for version 3, so if you've made changes to that file (for example, if you've written your own components and added divs for them to the `html` option), save them somewhere else before running the generator, then let the generator overwrite that file, and copy and paste the changes you made back into the new file after the generator finishes.