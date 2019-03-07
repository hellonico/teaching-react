class MyTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {size: 3}
  }
  render(){

    let rows = [];
    
    for (var i = 0; i < this.state.size; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.size; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID}>{cellID}</td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }

    return(
      <table class="table" id="simple-board">
         <tbody>
           {rows}
         </tbody>
       </table>
    )
  }
}

ReactDOM.render(
  <MyTable/>,
  document.getElementById('root')
);