import React from 'react';
import AuthenticatedComponent from '@economist/component-authenticated';
import Icon from '@economist/component-icon';

export default class UserMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AuthenticatedComponent>
        <a  showIfNotLoggedIn="true" href="https://www.economist.com/user/login?destination=node%2F21555491" className="log-in-btn">Log in or register</a>
        <a  showIfNotLoggedIn="true" href="https://www.economist.com/logout" className="log-out-btn">Log out</a>
        <ul showIfNotLoggedIn="true">
          <li><a href="/user">My account</a></li>
          <li><a href="/bookmarks">Timekeeper reading list</a></li>
          <li><a href="/admin">Administer</a></li>
          <li><a href="/logout">Log out</a></li>
        </ul>
      </AuthenticatedComponent>
    );
  }
}
