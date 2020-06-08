import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const withRedux = (
    Component,
    pStateToProps = null,
    pDispatchToProps = null
) => {
    function wrapComponent(props) {
        return <Component {...props} />;
    }

    return connect(pStateToProps, dispatch =>
        bindActionCreators(pDispatchToProps, dispatch)
    )(wrapComponent);
};

export default withRedux;
