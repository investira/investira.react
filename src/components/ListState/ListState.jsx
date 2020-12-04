import React, { memo } from 'react';
import { Typography, CenterInView, Loading } from '../';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Style from './ListState.module.scss';

const ListMessage = memo(props => {
    const xClass = classNames(Style.root, {
        [Style.padding]: props.padding
    });

    if (props.isFetching && props.listSize <= 0) {
        return (
            <div className={xClass}>
                <CenterInView>
                    <Loading />
                </CenterInView>
            </div>
        );
    }

    if (props.message) {
        return (
            <div className={xClass}>
                <CenterInView>
                    <Typography color={'textSecondary'} align={'center'}>
                        {props.message}
                    </Typography>
                </CenterInView>
            </div>
        );
    }

    return <div className={xClass}>{props.children}</div>;
});

ListMessage.defaultProps = {
    listSize: 0,
    padding: true
};

ListMessage.propTypes = {
    listSize: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    message: PropTypes.string
};

export default ListMessage;
