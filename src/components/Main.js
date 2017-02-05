require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import App from './App';

let clients = [
  {
    id: 1,
    name: 'Вася Пупкин',
    note: 'Примечание',
    phone: '375 33 212 12 12'
  },
  {
    id: 2,
    name: 'Петя Новик',
    note: 'Примечание',
    phone: '375 33 111 111 11'
  },
  {
    id: 3,
    name: 'Миша Лол',
    note: 'Примечание',
    phone: '375 33 011 23 32'
  }
];

class AppComponent extends Component {
  render() {
    return (
      <App clients={ clients }/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
