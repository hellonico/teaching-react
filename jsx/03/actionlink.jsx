class ActionLink extends React.Component {
  
  handleClick(e) {
    e.preventDefault();
    // console.log('The link was clicked.');
    window.alert('The link was clicked.');
  }

  render() {
   return <div>
    <a href="#" onClick={this.handleClick}>Click me</a>
   </div>
  }
}

ReactDOM.render(
<ActionLink/>, 
document.getElementById('root'));