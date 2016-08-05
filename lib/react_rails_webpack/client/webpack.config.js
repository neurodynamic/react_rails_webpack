require('webpack')
var getConfig = require('hjs-webpack')
var environment = require('./environment.json')

var config = getConfig({
  in: 'src/app.js',
  out: '../app/assets/webpack',
  minify: false,
  html: function (context) {
    return {
      'index.html':
        context.defaultTemplate(
          {
            // title: 'Site Title'
            // head: '<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>',
            html: "<div class=\"react-component-target\" data-componentname=\"Hello\" data-componentprops='{ \"details\": \"My initial greeting was set in the client/src/components/Hello.jsx file.\" }'></div>" +
            "<div class=\"react-component-target\" data-componentname=\"HelloWithRedux\" data-componentprops='{ \"details\": \"My initial greeting was set in the client/src/redux/reducer.js file.\" }'></div>"
          }
        )
    }
  },

  // environment.hostname is set in your environment.json file
  // Set it to your computer's name on your network
  // On a Mac, to see your computer's name on your network,
  // go to System Preferences, and then the "Sharing" menu,
  // and you should see a "Computer Name" input field
  hostname: environment.hostname,
  isDev: process.env.NODE_ENV !== 'production'
})

module.exports = config
