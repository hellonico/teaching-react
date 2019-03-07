class InputWithFocus extends React.Component{
  componentDidMount(){
    this.nameInput.focus();
  }
  render() {
    return(
      <div>
        <input 
          defaultValue="Won't focus" 
        />
        <input 
          ref={(input) => { this.nameInput = input; }} 
          defaultValue="will focus"
        />
      </div>
    );
  }
}
    
ReactDOM.render(<InputWithFocus />, document.getElementById('root'));