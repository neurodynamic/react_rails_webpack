# ReactRailsWebpack

## Quick Start

### Install

1. Make sure you have the [requirements](https://github.com/neurodynamic/react_rails_webpack#requirements) installed
2. Add `gem 'react_rails_webpack'` to your Gemfile
3. Run `bundle install`
4. Run `rails g react_rails_webpack:install` ([further explanation of what this does](#generating-the-integration))
5. Run `npm run install`
6. Run `npm run build`
7. Set the dev server hostname ([instructions](#setting-the-dev-server-hostname))

### Add example page
1. Run `rails g react_rails_webpack:create_example_page`
2. Start the Rails server (run `rails server`)
3. Go to `localhost:3000/greeting` to see your React/Rails integration in action

## About

When I looked over the available gems for react/rails integrations, none of them were as customizable as I wanted, so I decided to build my own. Since I wanted it to be as customizable as possible, I made my gem a set of generators, instead of a bunch of under-the-hood gem code. You can customize the inner workings of this integration to your heart's content, since all the files used for the integration will be added directly to your app. You can edit them, delete them, and add or remove any npm packages you like, because this integration allows you to use any npm packages you could use in a static front-end react app.

**Pros:**

- Webpack integration
- Hot-reloading webpack development server
- Ability to see dev server output on any computer (or mobile device) on your network
- Built-in redux integration
- Generators provide example code for basic react components and react-redux components
- Highly customizable
- Ability to use any npm packages that you could use on a static front-end app

**Cons:**

- This gem does not do server-side rendering, so if you need to do SEO stuff within your react components, it's probably the wrong choice

## Installing the Gem

Add this line to your application's Gemfile:

```ruby
gem 'react_rails_webpack'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install react_rails_webpack

## Requirements

- [Rails](http://rubyonrails.org/) 4.0+
- [node](https://nodejs.org/) (tested on 4.2.2)
- [npm](https://www.npmjs.com/) (tested on 3.4.0)

## Usage

### Generating the Integration

Run the install generator like this:

    $ rails g react_rails_webpack:install

This will setup a basic react integration with some example components (one standard react component and one using react with redux) under a `client` folder in your project's root. Once the generator's run is done, run the commands below (from your project's root):

**Note**: Make sure you have [node](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine before running these.

    $ npm run install   # installs the needed npm packages
    $ npm run build     # uses webpack to compile your javascript code to your assets folder

Then [set the dev server hostname](#setting-the-dev-server-hostname)

### Setting the dev server hostname

Then go to the `client/environment.json` file and fill in your computer's network name. If you're using a Mac, to find out what your computer's network name is, you can go to `System Preferences`, and then the `Sharing` menu, and you should see it in the `Computer Name` field. `environment.json` should end up looking something like this:

```
{
  "hostname": "my_mac.local"
}
```

### Generating an Example Page

If you want to setup an example page in your Rails app that uses the provided React components, run:

    $ rails g react_rails_webpack:create_example_page

Then run the rails server and go to the `/greeting` page to see everything in action.

### Creating and using your own components

Let's say you want to make a checkout form component with react. Here's what you'd need to do to use it from Rails:

- Create the component in the `client/src/components` directory
- Add the component to the list of components in the `client/src/app/availableComponents.js` file (this file is what makes components available to Rails)

For example, if you called your component `CheckoutForm`, your `client/src/app/availableComponents.js` file might look like this:

```javascript
import CheckoutForm from '../components/CheckoutForm'

export default {
  CheckoutForm: {
    class: CheckoutForm
  }
}
```

Or like this if it's a component that uses redux:

```javascript
import {CheckoutFormContainer} from '../components/CheckoutForm'

export default {
  CheckoutForm: {
    redux: true,
    class: CheckoutFormContainer
  }
}
```

- Wherever you want this component to render in your view, put a call to the `react_component` helper method with the components name and props, like so:

```ruby
render_component "CheckoutForm", { customerName: 'Harper' }
```

### Adding Trailblazer Integration

Running this generator:

    $ rails g react_rails_webpack:trailblazer_integration

Will add a trailblazer cell for react components to your `lib` folder.


### Working with the Webpack Dev Server

`npm run start` will start a webpack development server with hot reloading that is completely independent of your Rails app. You can see the output of this server on any computer or mobile device on your local network by going to `hostname:3000` (replace `hostname` with whatever you set it to in the `hostname.json` file).

### Gotchas

#### Forgetting to run `npm run build`

Remember, while your changes to components will hot reload when you use the webpack dev server, they will not show up at all in your Rails app until you run the `npm run build` command.

#### Forgetting to add components to the `client/src/app/availableComponents.js` file

Components will not be accessible from Rails if you forget to add them here.

## Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/neurodynamic/react_rails_webpack. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

