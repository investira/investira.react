import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { validators } from 'investira.sdk';

import { NavBar, IconButton, Icon, DeckContext } from '../';

const DeckNavBar = memo(props => {
    return (
        <DeckContext.Consumer>
            {({ prevView, onPrevView }) => {
                return (
                    <NavBar
                        left={
                            !validators.isEmpty(prevView) ? (
                                <IconButton
                                    color={'primary'}
                                    onClick={onPrevView}>
                                    <Icon
                                        size={21}
                                        iconName={'arrow-previous'}
                                    />
                                </IconButton>
                            ) : (
                                props.left
                            )
                        }
                        center={props.center}
                        right={props.right}
                    />
                );
            }}
        </DeckContext.Consumer>
    );
});

DeckNavBar.propTypes = {
    left: PropTypes.object,
    right: PropTypes.object,
    center: PropTypes.object
};

export default DeckNavBar;
