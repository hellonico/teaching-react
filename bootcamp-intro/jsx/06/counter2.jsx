
class CounterButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }
  
    render() {
      return (
       <div>
        
        <button
          onClick={() => this.setState((state,props) => ({count: state.count + props.inc}))}>
          Count: {this.state.count}
        </button>

      </div>
      );
    }
  }


 class Buttons extends React.Component {

   render() {
     return <div>
       <CounterButton inc={5}/>
       <CounterButton inc={10}/>
     </div>;
   }
 }
  

ReactDOM.render(<Buttons/>, document.getElementById('root'));