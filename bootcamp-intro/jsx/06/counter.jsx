
class CounterButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }
  
    render() {
      return (
       <div>
        
        <button
          onClick={() => this.setState((state) => ({count: state.count + this.props.inc}))}>
          Count: {this.state.count}
        </button>

      </div>
      );
    }
  }


ReactDOM.render(<div><CounterButton inc={5}/><CounterButton inc={3}/></div>, document.getElementById('root'));