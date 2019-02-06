/**
 * constructor を使う
 * renderのところにpropsを使う
 */
class ComponentWithProp extends React.Component {

　constructor(props) {
    super(props)
    // props.message = "hello"
    // Cannot assign to read only property 'message' of object '#<Object>'
  }

  render() {
    return <div>
      {this.props.message}
    </div>;
  }
}
  
ReactDOM.render(
<div>
  <ComponentWithProp message="Jacksons5好き"/>
  <ComponentWithProp message="Princeも好き"/>  
  </div>, 
document.getElementById('root'));