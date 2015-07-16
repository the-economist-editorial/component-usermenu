'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentAuthenticated = require('@economist/component-authenticated');

var _economistComponentAuthenticated2 = _interopRequireDefault(_economistComponentAuthenticated);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

var UserMenu = (function (_React$Component) {
  _inherits(UserMenu, _React$Component);

  function UserMenu() {
    _classCallCheck(this, UserMenu);

    _React$Component.apply(this, arguments);
  }

  // TODO
  // Comment link is related to username, username is an
  // information present on AuthenticatedComponent
  // Implement the propagation of user information
  // to children so the link can be created
  // <li><a href="https://www.economist.com/users/<username>/comments">
  // My comments</a></li>

  UserMenu.prototype.render = function render() {
    return _react2['default'].createElement(
      _economistComponentAuthenticated2['default'],
      null,
      _react2['default'].createElement(
        'a',
        { showIfNotLoggedIn: 'true',
          href: 'https://www.economist.com/user/login?destination=node%2F21555491',
          className: 'log-in-btn' },
        'LOG IN or REGISTER'
      ),
      _react2['default'].createElement(
        'a',
        { showIfLoggedIn: 'true',
          href: 'https://www.economist.com/logout',
          className: 'log-out-btn' },
        'LOG OUT'
      ),
      _react2['default'].createElement(
        'ul',
        { showIfLoggedIn: 'true' },
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            'a',
            { href: 'https://www.economist.com/user' },
            'My account'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            'a',
            { href: 'https://www.economist.com/admin' },
            'Administer'
          )
        )
      )
    );
  };

  return UserMenu;
})(_react2['default'].Component);

exports['default'] = UserMenu;
module.exports = exports['default'];

