# ReactRailsWebpack

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

Execute:

    $ rails g react_rails_webpack:install

to setup the files and folders needed to use react with your Rails project.

### Setup

This will setup a basic set of react example components under the "client" folder in your project's root. Once the install is done, run these commands:

    $ cd client
    $ npm install
    $ cd ..
    $ cd npm run build

Then go to the `client/environment.json` file and fill in your computer's network name. If you're using a Mac, to find out what your computer's network name is, you can go to System Preferences, and then the "Sharing" menu, and you should see it in the "Computer Name" field. `environment.json` should end up looking something like this:

```
{
  "hostname": "my_mac.local"
}
```

### Generate Example Page

If you want to setup an example page that uses the provided React components, run:

    $ rails g react_rails_webpack:create_example_page

Then run the rails server and go to the "/greeting" page to see everything in action.

## Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/react_rails_webpack. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

