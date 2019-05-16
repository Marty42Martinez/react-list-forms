import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  };

  state = {
    name: '',
    color: '#000000'
  }

  render() {
    const { color, name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" type="text" value={name} onChange={this.handleChange} />
        <input name="color" type="color" value={color} onChange={this.handleChange} />
        <button>AddColor</button>
      </form>
    );
  }
}
