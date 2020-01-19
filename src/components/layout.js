import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

const Layout = (props) => {
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: rhythm(1.5),
          marginTop: 0
        }}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to='/'>
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          marginTop: 0
        }}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to='/'>
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(26),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <div
          style={{
            marginTop: rhythm(1),
            display: 'flex'
          }}>
          <a href='https://github.com/calintamas'>
            <small>github</small>
          </a>
          <div style={{ width: 10 }} />
          <a href='https://twitter.com/calintamas2'>
            <small>twitter</small>
          </a>
          <div style={{ width: 10 }} />
          <a href='mailto:calinntamas@gmail.com' target='_top'>
            <small>contact</small>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
