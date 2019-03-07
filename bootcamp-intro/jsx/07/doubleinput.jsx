
class InputControl extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: "なんにもにゃい", text2: "まだまだある"};
    }

  componentDidMount() {
      setTimeout(() => {
        this.setState({text2:"なにかある。。多分"})
      }, 3000)
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <p>{this.state.text2}</p>
      </div>

    );
  }
}


ReactDOM.render(<InputControl/>, document.getElementById('root'));
