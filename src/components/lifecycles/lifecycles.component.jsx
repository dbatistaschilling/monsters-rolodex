import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    super();
    // First to be called - Only Mounting Phase
    console.log('constructor!');
  }
  // Third to be called - Only Mounting Phase
  componentDidMount() {
    console.log('componentDidMount!');
  }
  // Third to be called - Update Phase (Only if shouldComponentUpdate returns true)
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  // First and only on unmouting Phase
  // It's triggered when some component
  // will be removed from the DOM. If the component
  // is inserted again into the DOM, all the
  // Mounting methods are triggered.
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // Controls the update phase, including if
  // it needs to re-render
  // First to be called - Update Phase
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps);
    // If false, does not render the component again
    return nextProps.text !== this.props.text
    // return true
  }

  // Second to be called - Mounting Phase
  // Second to be called - Update Phase (Only if shouldComponentUpdate returns true)
  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>
        <h3>Lifecycles Component</h3>
        {this.props.text}
      </div>
    )
  }
}

export default Lifecycles;