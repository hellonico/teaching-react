class Clock extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.props.time
    );
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <p>Local time is ... </p>
        <p>{this.state.date.toString()}</p>
      </div>
    );
  }
}

ReactDOM.render(<Clock time="1000" />,document.getElementById('root'));