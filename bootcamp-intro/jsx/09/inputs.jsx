
class InputControl extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: this.props.initialValue || 'placeholder'};
    }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
        Type something:
        <input onChange={this.handleChange} value={this.state.text} />
        <br/>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

class Group extends React.Component {
  
  render() {
  return(<div>
   <InputControl initialValue="type here1"/>
   <InputControl initialValue="type here2" />
  </div>
  );
  }

}

ReactDOM.render(<Group/>, document.getElementById('root'));
