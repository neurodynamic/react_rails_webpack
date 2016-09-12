/*
  Welcome to the Webpack configuration file!

  The react_rails_webpack gem uses the hjs-webpack npm package to configure webpack.

  Any options available in hjs-webpack are available here.

  hjs-webpack repo: https://github.com/HenrikJoreteg/hjs-webpack
  hjs-webpack tutorial (for an outdated version, but concepts are relatively unchanged): http://learn.humanjavascript.com/react-ampersand/setting-up-webpack
*/

require('webpack')
var getConfig = require('hjs-webpack') // This setup is largely based on the hjs-webpack npm package
var environment = require('./environment.json')

// I disable most of the UglifyJS minification by default
// so that if any weird errors happen on the Rails side
// it is still possible to track them down in the
// compiled code. Rails will uglify assets on its own.
var uglifyOpts = {
  compress: false,
  mangle: false,
  beautify: { semicolons: false },
  sourceMap: false,
  output: { comments: true }
}

var config = getConfig({
  in: 'src/app.js', // Tells webpack to look in the src/app.js file to find the code for components and rendering
  out: '../app/assets/webpack', // Tells webpack to put compiled files into ../app/assets/webpack when it runs
  clearBeforeBuild: true, // Tells webpack to destroy and remake pre-existing OUT folder before compiling files to it
  uglify: uglifyOpts, // Disables most of Uglify
  html: function (data) {
    var sourceFileNote = "<aside class='source'>Find the source for this page in client/webpack.config.js</aside>"

    // The divs below will get detected by React because they have the "react-component-target" class
    // If you want to test a new component, you'll have to edit one of these accordingly or
    // add another div with the "react-component-target" class and pass it the appropriate
    // component name and props in the "data-componentname" and "data-componentprops" attributes
    // just like the ones below.
    var plainReactComponent = "<div class=\"react-component-target\" data-componentname=\"Hello\" data-componentprops='{ \"details\": \"My initial greeting was set with getInitialState in the client/src/components/Hello.jsx file.\" }'></div>"
    var reduxComponent = "<div class=\"react-component-target\" data-componentname=\"HelloWithRedux\" data-componentprops='{ \"details\": \"My initial greeting was set with initialState in the client/src/redux/reducer.js file.\" }'></div>"

    return {
      'index.html':
        data.defaultTemplate(
          {
            // Other options you could pass include 'title' and 'head':
            // title: 'Site Title'
            // head: '<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>',
            html: (sourceFileNote + plainReactComponent + reduxComponent)
          }
        )
    }
  },

  // environment.hostname is set in your environment.json file
  // It should be set to your computer's name on your network
  // On a Mac, to see your computer's name on your network,
  // go to System Preferences, and then the "Sharing" menu,
  // and you should see it in the "Computer Name" input field
  hostname: environment.hostname
})

module.exports = config
