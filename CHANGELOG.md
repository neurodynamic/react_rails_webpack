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