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
            html: "<div class=\"react-component-target\" data-component-name=\"Hello\"></div>" +
            "<div class=\"react-component-target\" data-component-name=\"HelloWithRedux\" data-component-props='{ \"greeting\": \"Heck off\" }'></div>"
          }
        )
    }
  },

  // environment.hostname is set in your environment.json file
  hostname: environment.hostname,
  isDev: process.env.NODE_ENV !== 'production'
})

module.exports = config
