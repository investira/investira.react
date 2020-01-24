import React from 'react';
import PropTypes from 'prop-types';
import { validators } from 'investira.sdk';
// import { isEmpty } from '../../../utils/validators';

/**
 *
 */
export const Basic = props => {
    const { id, idSuffix, tag, ...xPassThruAttrs } = props;

    let Tag = props.tag;
    let xId = null;
    if (!validators.isEmpty(props.id)) {
        xId = props.id.trim();
        if (!validators.isEmpty(props.idSuffix)) {
            xId += props.idSuffix.trim();
        }
    }

    return (
        <Tag {...xPassThruAttrs} id={xId} name={xId}>
            {props.children}
        </Tag>
    );
};

Basic.propTypes = {
    id: PropTypes.string,
    idSuffix: PropTypes.string,
    tag: PropTypes.string
};

Basic.defaultProps = {
    tag: 'div'
};

export default Basic;
