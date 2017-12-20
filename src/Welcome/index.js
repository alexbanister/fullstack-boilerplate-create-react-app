import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <h3>Hi</h3>
      </div>
    );
  }
}

Welcome.propTypes = {};

const mapStateToProps = (store) => {
  return {
    store
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Welcome));
