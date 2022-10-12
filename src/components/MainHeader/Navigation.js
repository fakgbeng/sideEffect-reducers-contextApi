import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

/*
React Context
Passing data through a lot of components via props are sometimes bad practice. In react we have a component-wide, behind-the-scenes state storage called react context.

This allows us to trigger an action in that component-wide state-storage and then directly pass that to the component that is interested without building a long prop chain.

So we might ask if this is doing exactly what props is doing and even better😀, then why use prop🤔. So we should know react context also have some limitations.

Context limitations
==> React context is not optimized for high frequency changes.
==> It also shouldn't be used to replace ALL component communications and props.

*/
