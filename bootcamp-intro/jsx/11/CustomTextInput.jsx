class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.logButton = React.createRef();

  }
  
  logManualRequestModal() {
    console.log("hello")
  }

  componentDidMount(){
     this.logButton.current.focus();
  }
  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <button ref={this.logButton}  color="primary" size="sm" onClick={this.logManualRequestModal}>
         Log request
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <CustomTextInput/>,
  document.getElementById('root')
);