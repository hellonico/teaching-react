import React from 'react';

import { connect } from 'react-redux';

import { activateGeod, closeGeod } from './loggingredux';

class MyButton extends React.Component {
  render() {
    return <button
    onClick={() =>
      this.props.activateGeod({ title: this.props.meta })
    }
    >
    {this.props.title}
    </button>
  }
}
// App.js
export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.geod.title || 'Hello World!'}</h1>

        {this.props.geod.title ? (
          <button onClick={this.props.closeGeod}>Exit Geod</button>
        ) : (
          <div>
          <ButtonContainer title="geo1" meta="I am geo1"/>
          <ButtonContainer title="geo2" meta="I am geo2"/>
          </div>
        )}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyButton);

export default AppContainer;
