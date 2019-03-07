
class CounterButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      // if (this.state.count !== nextState.count) {
      //   return true;
      // }
      if (nextState.count % 5 == 0)
        return true;

      return false;
    }
  
    render() {
      return (
        <button onClick={() => this.setState(state => ({count: state.count + 1}))}>
          Count: {this.state.count}
        </button>
      );
    }
}

// ReactDOM.render(<CounterButton/>, document.getElementById('root'));  

  class Buttons extends React.Component {

   render() {
    return <div>
     <CounterButton/>
     <CounterButton/>
     <CounterButton/>
    </div>
  }
 }
  
 ReactDOM.render(<Buttons/>, document.getElementById('root'));