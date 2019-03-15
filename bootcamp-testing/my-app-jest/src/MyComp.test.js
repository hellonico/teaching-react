import React from 'react';
import ReactDOM from 'react-dom';
import MyComp from './MyComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const comp = ReactDOM.render(<MyComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('can set and access the state', () => {
  const div = document.createElement('div');
  const comp = ReactDOM.render(<MyComp />, div);
  expect(comp.state).toEqual({});
  comp.sayHello()
  expect(comp.state).toEqual({'hello':'world'});
})