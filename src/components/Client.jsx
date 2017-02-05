import React from 'react';

const Client = React.createClass({
  render() {
    let name = this.props.data.name,
        note = this.props.data.note,
        phone = this.props.data.phone;
    return (
      <div className='list__item'>
        <input
          type="text"
          value={ name }
          placeholder="Имя и фамилия"
        />
        <input
          type="text"
          value={ note }
          placeholder="Примечание"
        />
        <input
          type="text"
          value={ phone }
          placeholder="Номер телефона"
        />
        <buttom className="btn-remove"></buttom>
      </div>
    )
  }

});

export default Client;
