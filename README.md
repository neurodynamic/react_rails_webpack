# ReactRailsWebpack

## About

When I looked over the available gems for react/rails integrations, none of them were as customizable as I wanted, so I decided to build my own. Since I wanted it to be as customizable as possible, I made my gem a set of generators, instead of a bunch of under-the-hood gem code. You can customize the inner workings of this integration to your heart's content, since all the files and folders used for the integration will be added directly to your app. You can edit them, delete them, and add or remove any npm packages you like, because this integration allows you to use any npm packages you could use in a static front-end react app.

Pros:

- Webpack integration
- Built-in redux integration
- Generators provide example code for basic react components and react-redux components
- Easy customizability
- Ability to use any npm packages that you could use on a static front-end app

Cons:

- This gem does NOT do server-side rendering, so if you need to do SEO stuff within your react components, it's probably the wrong choice



## Installation

Add this line to your application's Gemfile:

```ruby
gem 'react_rails_webpack'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install react_rails_webpack

## Usage

### Install

Run the install generator like this:

    $ rails g react_rails_webpack:install

This will setup a basic react integration with some example components (one standard react component and one using react with redux) under the "client" folder in your project's root. Once the generator's run is done, run these commands to install the needed npm packages (`npm run install`) and then to compile the code to your assets folder (`npm run build`):

    $ npm run install
    $ npm run build

Then go to the `client/environment.json` file and fill in your computer's network name. If you're using a Mac, to find out what your computer's network name is, you can go to `System Preferences`, and then the `Sharing` menu, and you should see it in the `Computer Name` field. `environment.json` should end up looking something like this:

```
{
  "hostname": "my_mac.local"
}
```

### Generate Example Page

If you want to setup an example page in your Rails app that uses the provided React components, run:

    $ rails g react_rails_webpack:create_example_page

Then run the rails server and go to the "/greeting" page to see everything in action.

## Usage

### Creating and using your own component

Let's say you want to make a checkout form component with react. Here's what you'd need to do to use it from Rails:

1. Create the component in the `client/src/components` directory
2. Add the component to the list of components in the `client/src/app/availableComponents.js` file (this file is what makes components available to Rails)

For example, if you called your component CheckoutForm, your `client/src/app/availableComponents.js` file might look like this:

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
  CheckoutFormContainer: {
    redux: true,
    class: CheckoutForm
  }
}
```

3. Wherever you want this component to render in your view, put a call to the `react_component` helper method with the components name and props, like so:

```ruby
render_component "CheckoutForm", { customerName: 'Harper' }
```


### Working with the Webpack Dev Server

`npm run start` will start a webpack development server with hot reloading that is completely independent of your Rails app.

### Gotchas

#### Forgetting to run `npm run build`

Remember, while your changes to components will hot reload when you use the Webpack dev server, they will not show up at all in your Rails app until you save them and run the `npm run build` command.

#### Forgetting to add components to the `client/src/app/availableComponents.js` file

Components will not be accessible from Rails if you forget to add them here.

## Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/react_rails_webpack. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

