'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentAuthenticated = require('@economist/component-authenticated');

var _economistComponentAuthenticated2 = _interopRequireDefault(_economistComponentAuthenticated);

var authenticated = new _economistComponentAuthenticated2['default']();

var UserMenu = (function (_React$Component) {
  _inherits(UserMenu, _React$Component);

  function UserMenu() {
    _classCallCheck(this, UserMenu);

    _React$Component.call(this);
    this.state = { isLoggedIn: 'loading' };
  }

  UserMenu.prototype.componentDidMount = function componentDidMount() {
    this.setState({ isLoggedIn: authenticated.getCookie('s_cc') });
  };

  UserMenu.prototype.render = function render() {
    var userLogin = undefined;
    if (this.state.isLoggedIn === 'loading') {
      userLogin = _react2['default'].createElement(
        'a',
        { href: "https://www.economist.com/user/login?destination=node%2F21555491", className: "log-in-btn" },
        'Loading...'
      );
    } else {
      if (typeof this.state.isLoggedIn === 'undefined') {
        userLogin = _react2['default'].createElement(
          'a',
          { href: "https://www.economist.com/user/login?destination=node%2F21555491", className: "log-in-btn" },
          'LOG IN or REGISTER'
        );
      } else {
        userLogin = _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            { href: "https://www.economist.com/logout", className: "log-out-btn" },
            'LOG OUT'
          ),
          _react2['default'].createElement(
            'ul',
            null,
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'a',
                { href: "https://www.economist.com/user" },
                'My account'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'a',
                { href: "https://www.economist.com/admin" },
                'Administer'
              )
            )
          )
        );
      }
    }
    return _react2['default'].createElement(
      'div',
      null,
      userLogin
    );
  };

  return UserMenu;
})(_react2['default'].Component);

exports['default'] = UserMenu;
module.exports = exports['default'];

