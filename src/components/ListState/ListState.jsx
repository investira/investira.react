import React, { memo } from 'react';
import { Typography, CenterInView, Loading } from '../';
import PropTypes from 'prop-types';

import Style from './ListState.module.scss';

const ListMessage = memo(props => {
    // if (props.isFetching && props.listSize <= 0) {
    //     return (
    //         <div className={Style.root}>
    //             <CenterInView>
    //                 <Loading />
    //             </CenterInView>
    //         </div>
    //     );
    // }

    if (props.isFetching) {
        return (
            <div className={Style.root}>
                <CenterInView>
                    <Loading />
                </CenterInView>
            </div>
        );
    }

    if (props.message) {
        return (
            <div className={Style.root}>
                <CenterInView>
                    <Typography color={'textSecondary'} align={'center'}>
                        {props.message}
                    </Typography>
                </CenterInView>
            </div>
        );
    }

    return <div className={Style.root}>{props.children}</div>;
});

ListMessage.propTypes = {
    listSize: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    message: PropTypes.string
};

ListMessage.defaultProps = {
    listSize: 0
};
export default ListMessage;
