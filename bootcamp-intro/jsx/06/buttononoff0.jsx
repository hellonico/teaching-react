class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  // click(event) {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }

  click = (event) => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
        <button onClick={this.click}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
