import React, { PureComponent } from 'react';
import { PropTypes as PT } from 'prop-types';

import style from '../styles/Announcement.module.scss';

export default class Announcement extends PureComponent {
  render() {
    const {
      // eslint-disable-next-line
      id, type, message, durration,
    } = this.props;

    return (
      <div className={`${style.announcement} ${style[type]}`}>
        <div className={style.bar} />
        {message}
      </div>
    );
  }
}

Announcement.defaultProps = {
  type: 'info',
  durration: 4000,
};

Announcement.propTypes = {
  id: PT.string.isRequired,
  type: PT.string,
  message: PT.string.isRequired,
  durration: PT.number,
};
