require 'json'

module ReactHelper
  include ActionView::Helpers::JavaScriptHelper

  # Props should be a Ruby hash
  def react_component(component_name, props = {})
    # Give second argument to content_tag some text
    # if you want to test to see if React is properly
    # replacing its content with a component
    content_tag(
      :div,
      javascript_tag('renderLastComponentDiv()'),
      class: 'react-component-target',
      data: {
        componentName: component_name,
        componentProps: props.to_json
      }
    )
  end
end
