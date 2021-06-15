import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { validators } from 'investira.sdk';
import { capitalize } from '../utils/helpers';
import Style from './Icon.module.scss';

const Icon = memo(props => {
    const xIconName = '-i_' + props.iconName;

    const xGradientTypes = {
        greenLight: ['#0ae1a3', '#0bbbd0'],
        orangeLight: ['#F38A1D', '#FC602D']
    };

    const isValidSize = pSize => {
        return validators.isNumber(pSize) ? `${pSize}px` : '24px';
    };

    const xClass = classNames(Style.root, xIconName, props.className, {
        [Style[`color${capitalize(props.color)}`]]: props.color !== 'default'
    });

    const isGradient = pColorProp => {
        return Object.keys(xGradientTypes).includes(pColorProp);
    };

    const defs = pColor => {
        if (!isGradient(pColor)) {
            return null;
        }

        return (
            <defs>
                {Object.keys(xGradientTypes).map(xKey => {
                    return (
                        <linearGradient
                            id={`icon-component-gradient-${xKey}`}
                            x2="1"
                            y2="1"
                            gradientUnits="objectBoundingBox">
                            <stop
                                offset={0}
                                stopColor={xGradientTypes[xKey][0]}
                            />
                            <stop
                                offset={1}
                                stopColor={xGradientTypes[xKey][1]}
                            />
                        </linearGradient>
                    );
                })}
            </defs>
        );
    };

    if (validators.isEmpty(props.iconName)) {
        return null;
    } else {
        return (
            <svg
                width={isValidSize(props.size)}
                height={isValidSize(props.size)}
                className={xClass}
                style={props.style}
                viewBox={'0 0 24 24'}>
                {defs(props.color)}
                <use href={`#${xIconName}`} xlinkHref={`#${xIconName}`} />
            </svg>
        );
    }
});

Icon.propTypes = {
    size: PropTypes.number,
    iconName: PropTypes.string,
    className: PropTypes.string,
    classes: PropTypes.object,
    color: PropTypes.oneOf([
        'default',
        'inherit',
        'primary',
        'secondary',
        'secondaryLight',
        'primaryDarkness',
        'warn',
        'danger',
        'info',
        'textPrimary',
        'textSecondary',
        'black',
        'greenLight',
        'orangeLight'
    ])
};

Icon.defaultProps = {
    color: 'default',
    size: 24
};

export default Icon;
