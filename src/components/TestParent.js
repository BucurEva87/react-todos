import React, { PureComponent } from 'react';
import TestChild from './TestChild';

export default class TestParent extends PureComponent {
  render() {
    return (
      <TestChild title="Whatever something" />
    );
  }
}
