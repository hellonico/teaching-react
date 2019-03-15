const React = require("react");
const { useState, useEffect } = React;
const ReactDOM = require("react-dom");
const { act } = require("react-dom/test-utils");
import innerText from 'react-innertext';

describe("I am playing with counters", () => {
  it("can count", () => {
    
    function Counter({initialCount}) {
      const [count, setCount] = useState(initialCount);
      return (
        <>
          <span>hello {count}</span>
          <button onClick={() => setCount(initialCount)}>Reset</button>
          <button onClick={() => {setCount(prevCount => prevCount + 1)}}>+</button>
          <button onClick={() => {setCount(prevCount => prevCount - 1)}}>-</button>
        </>
      );
    }

  	const el = document.createElement("div");
    document.body.appendChild(el);
    ReactDOM.render(<Counter initialCount={0} />, el);

 	  const button = document.querySelectorAll('div button')[1]
    act(() => {
      for (let i = 0; i < 3; i++) {
        button.click();        
      }
    });

    const sp = document.querySelectorAll('div span')[0];
    expect(sp.innerHTML).toBe('hello 3');

    const button2 = document.querySelectorAll('div button')[2]
    act(() => {
      for (let i = 0; i < 3; i++) {
        button2.click();        
      }
    });
    expect(sp.innerHTML).toBe('hello 0'); 
  })

})