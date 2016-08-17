/*
  Welcome to the Webpack configuration file!
*/

require('webpack')
var getConfig = require('hjs-webpack') // This setup is largely based on the hjs-webpack npm package
var environment = require('./environment.json')

var config = getConfig({
  in: 'src/app.js', // Tells webpack to look in the src/app.js file to find the code for components and rendering
  out: '../app/assets/webpack', // Tells webpack to put compiled files into ../app/assets/webpack when it runs
  minify: false, // Tells Webpack not to minify stuff, since in this case we'll let the Rails asset pipeline deal with that
  html: function (context) {
    return {
      'index.html':
        context.defaultTemplate(
          {
            // title: 'Site Title'
            // head: '<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>',
            html: "<aside class='source'>Find the source for this page in client/webpack.config.js</aside>" +

            // The divs below will get detected by React because they have the "react-component-target" class
            // If you want to test a new component, you'll have to edit one of these accordingly or
            // add another div with the "react-component-target" class and pass it the appropriate
            // component name and props in the "data-componentname" and "data-componentprops" attributes
            // just like the ones below.
            "<div class=\"react-component-target\" data-componentname=\"Hello\" data-componentprops='{ \"details\": \"My initial greeting was set with getInitialState in the client/src/components/Hello.jsx file.\" }'></div>" +
            "<div class=\"react-component-target\" data-componentname=\"HelloWithRedux\" data-componentprops='{ \"details\": \"My initial greeting was set with initialState in the client/src/redux/reducer.js file.\" }'></div>"
          }
        )
    }
  },

  // environment.hostname is set in your environment.json file
  // It should be set to your computer's name on your network
  // On a Mac, to see your computer's name on your network,
  // go to System Preferences, and then the "Sharing" menu,
  // and you should see it in the "Computer Name" input field
  hostname: environment.hostname,
  isDev: process.env.NODE_ENV !== 'production'
})

module.exports = config
