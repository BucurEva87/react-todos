import React, { PureComponent } from 'react';

export default class TodoItem extends PureComponent {
  render() {
    return (
      <li>
        <input type="checkbox" />
        <span />
        <button type="button" className="edit">Edit</button>
        <button type="button" className="delete">Delete</button>
      </li>
    );
  }
}
