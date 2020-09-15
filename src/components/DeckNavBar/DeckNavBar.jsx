import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { validators } from 'investira.sdk';

import { NavBar, IconButton, Icon, DeckContext } from '../';

const DeckNavBar = memo(props => {
    return (
        <DeckContext.Consumer>
            {({ prevView, onPrevView }) => {
                const xRightBehavior =
                    props.rightBehavior === 'default'
                        ? validators.isEmpty(prevView)
                        : !validators.isEmpty(prevView);
                return (
                    <NavBar
                        left={
                            !validators.isEmpty(prevView) ? (
                                <IconButton
                                    color={'primary'}
                                    onClick={() => onPrevView(props.onBack)}>
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
                        right={xRightBehavior && props.right}
                    />
                );
            }}
        </DeckContext.Consumer>
    );
});

DeckNavBar.propTypes = {
    left: PropTypes.object,
    right: PropTypes.object,
    center: PropTypes.object,
    onBack: PropTypes.func,
    rightBehavior: PropTypes.oneOf(['default', 'inverted'])
};

DeckNavBar.defaultProps = {
    rightBehavior: 'default'
};

export default DeckNavBar;
