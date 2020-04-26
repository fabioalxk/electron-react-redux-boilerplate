import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import userActions from '../actions/user';

class LoggedIn extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
  };

  handleLogout = () => {
    this.props.onLogout({
      username: '',
      loggedIn: false,
    });
  };

  render() {
    return (
      <div>
        <h2>Logged in as {this.props.user.username}</h2>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(userActions, dispatch);
  return {
    onLogout: (data) => {
      user.logout(data);
      dispatch(push('/'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
