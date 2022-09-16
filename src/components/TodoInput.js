import React, { PureComponent } from 'react';

import style from '../styles/TodoInput.module.scss';

export default class TodoInput extends PureComponent {
  render() {
    return (
      <form>
        <input
          type="text"
          id={style.todoInput}
          placeholder="Insert another Todo task..."
        />
        <button
          type="button"
          id={style.btnSubmit}
        >
          Add todo
        </button>
      </form>
    );
  }
}
