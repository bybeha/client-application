import React from 'react';
import Client from './Client';

const App = React.createClass({
  render() {
    let data = this.props.clients;
    let template = null;

    if (data.length > 0) {
      template = data.map((item) => {
        return (
          <Client key={ item.id } data={ item }/>
        );
      });
    }

    return (
      <div className="list">
        { template }
        <button className="btn-add">+</button>
     </div>
    );
  }

});

export default App;
