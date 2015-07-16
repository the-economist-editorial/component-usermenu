import React from 'react';
import AuthenticatedComponent from '@economist/component-authenticated';

export default class UserMenu extends React.Component {

  // Comment link is related to username, username is an
  // information present on AuthenticatedComponent
  // Implement the propagation of user information
  // to children so the link can be created
  // <li><a href="https://www.economist.com/users/<username>/comments">
  // My comments</a></li>

  render() {
    return (
      <AuthenticatedComponent>
        <a showIfNotLoggedIn="true"
         href="https://www.economist.com/user/login?destination=node%2F21555491"
         className="log-in-btn">LOG IN or REGISTER</a>
        <a showIfLoggedIn="true"
        href="https://www.economist.com/logout"
        className="log-out-btn">LOG OUT</a>
        <ul showIfLoggedIn="true">
          <li><a href="https://www.economist.com/user">My account</a></li>
          <li><a href="https://www.economist.com/admin">Administer</a></li>
        </ul>
      </AuthenticatedComponent>
    );
  }
}
