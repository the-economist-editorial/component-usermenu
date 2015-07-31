import React from 'react';
import Authenticated from '@economist/component-authenticated';

const authenticated = new Authenticated();
export default class UserMenu extends React.Component {

  constructor() {
    super();
    this.state = { isLoggedIn: 'loading' };
  }

   componentDidMount() {
    this.setState({ isLoggedIn: authenticated.getCookie('mm-logged-in-state') });
  }

  render() {
    let userLogin;
    if (this.state.isLoggedIn === 'loading') {
      userLogin = (<a href="https://www.economist.com/user/login?destination=node%2F21555491"
        className="log-in-btn">Loading...</a>);
    } else if (typeof this.state.isLoggedIn === 'undefined') {
      userLogin = (<a href="https://www.economist.com/user/login?destination=node%2F21555491"
        className="log-in-btn">LOG IN or REGISTER</a>);
    } else {
      userLogin = (
        <div>
          <a href="https://www.economist.com/logout" className="log-out-btn">LOG OUT</a>
          <ul>
            <li><a href="https://www.economist.com/user">My account</a></li>
          </ul>
        </div>
      );
    }

    return (
      <div className="UserMenu-container">
        {userLogin}
      </div>
    );
  }
}
