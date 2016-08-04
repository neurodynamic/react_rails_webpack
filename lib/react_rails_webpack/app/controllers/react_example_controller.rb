class ReactExampleController < ApplicationController
  def greeting
    @props = { greeting: 'Hello there, friend!' }
  end
end
