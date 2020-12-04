import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { validators } from 'investira.sdk';

import { NavBar, IconButton, Icon, DeckContext } from '../';

const DeckNavBar = memo(props => {
    return (
        <DeckContext.Consumer>
            {({ prevView, onPrevView, activeView }) => {
                const xBehaviors = {
                    default: validators.isEmpty(prevView),
                    inverted: !validators.isEmpty(prevView),
                    visible: true,
                    custom: true
                };

                const xActionBehavior = xBehaviors[props.actionBehavior];

                const xAction =
                    props.actionBehavior === 'custom'
                        ? props.right[activeView]
                        : props.right;

                const xOnBack =
                    typeof props.onBack === 'function'
                        ? props.onBack
                        : props.onBack[prevView];
                return (
                    <NavBar
                        left={
                            !validators.isEmpty(prevView) ? (
                                <IconButton
                                    color={'primary'}
                                    onClick={() => onPrevView(xOnBack)}>
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
                        right={xActionBehavior && xAction}
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
    onBack: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    actionBehavior: PropTypes.oneOf([
        'default',
        'inverted',
        'visible',
        'custom'
    ])
};

DeckNavBar.defaultProps = {
    actionBehavior: 'default'
};

export default DeckNavBar;
