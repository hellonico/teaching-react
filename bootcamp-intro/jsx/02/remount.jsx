
class MyElement extends React.Component {
  render() { return <div>
    <p>Local time is ... </p>
    <p>It is {new Date().toLocaleTimeString()}.</p>
  </div>
  }
}

function tick() {
  ReactDOM.render(
    <MyElement/>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);