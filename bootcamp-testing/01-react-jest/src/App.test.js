import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const comp = ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('can set and access the state', () => {
  const div = document.createElement('div');
  const comp = ReactDOM.render(<App />, div);
  expect(comp.state).toBe(null);
})

it('expect to be fails', () => {
	const div = document.createElement('div');
  const comp = ReactDOM.render(<App />, div);
	comp.setState({'hello':'test'});
  console.log(comp.state);
  // expect(comp.state).toBe({'hello':'test'});
  ReactDOM.unmountComponentAtNode(div);	
})

it('expect to equal', () => {
	const div = document.createElement('div');
  const comp = ReactDOM.render(<App />, div);
	comp.setState({'hello':'test'});
  console.log(comp.state);
  expect(comp.state).toEqual({'hello':'test'});
  ReactDOM.unmountComponentAtNode(div);	
})