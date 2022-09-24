import React, { PureComponent } from 'react';
import { PropTypes as PT } from 'prop-types';

import style from '../styles/TestChild.module.scss';

export default class TestChild extends PureComponent {
  constructor(props) {
    super(props);

    const { title } = this.props;

    this.state = {
      newTitle: title,
    };
  }

  render() {
    const { newTitle } = this.state;

    return (
      <span>{newTitle}</span>
    );
  }
}

TestChild.propTypes = {
  title: PT.string.isRequired,
};
