/**
 * Use internal state and show data
 */
function Clock(props) {
  return (
    <div>
      <p>Local time is ... </p>
      <p>It is {props.date.toLocaleTimeString()}.</p>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
