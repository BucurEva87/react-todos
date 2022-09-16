import React, { PureComponent } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';

export default class TodoContainer extends PureComponent {
  render() {
    return (
      <>
        <TodoHeader />
        <TodoInput />
      </>
    );
  }
}
