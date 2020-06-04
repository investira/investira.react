import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let dispatchToProps = null;

const withRedux = (Component, pStateToProps = null, pDispatchToProps = null) => {
    dispatchToProps = pDispatchToProps;

    function wrapComponent(props) {
        return <Component {...props} />;
    }

    return connect(pStateToProps, mapDispatchToProps)(wrapComponent);
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(dispatchToProps, dispatch);
};

export default withRedux;
