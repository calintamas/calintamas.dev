import React from 'react';
import { rhythm } from '../utils/typography';

const Timestamp = (props) => {
  const { date } = props;
  return (
    <time style={{ fontSize: rhythm(0.4) }} dateTime={date}>
      {date}
    </time>
  );
};

export default Timestamp;
