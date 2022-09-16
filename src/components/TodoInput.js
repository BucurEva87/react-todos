import React, { PureComponent } from 'react';

export default class TodoInput extends PureComponent {
  render() {
    return (
      <div>
        <input
          type="text"
          id="todoInput"
          placeholder="Insert another Todo task..."
        />
        <button type="button">Add todo</button>
      </div>
    );
  }
}
