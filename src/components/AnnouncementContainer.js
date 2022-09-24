import React, { PureComponent } from 'react';
import { PropTypes as PT } from 'prop-types';

import style from '../styles/AnnouncementContainer.module.scss';
import Announcement from './Announcement';

export default class AnnouncementContainer extends PureComponent {
  render() {
    const { announcements } = this.props;

    return (
      <div id={style.announcementContainer}>
        {announcements.map((announcement) => {
          const {
            id, type, message, duration, elapsed,
          } = announcement;

          return (
            <Announcement
              key={id}
              type={type}
              message={message}
              duration={duration}
              elapsed={elapsed}
            />
          );
        })}
      </div>
    );
  }
}

AnnouncementContainer.propTypes = {
  announcements: PT.arrayOf(PT.shape({
    id: PT.string.isRequired,
    type: PT.string,
    message: PT.string.isRequired,
    duration: PT.number,
    elapsed: PT.number.isRequired,
  })).isRequired,
};
