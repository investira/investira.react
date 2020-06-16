import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { validators } from 'investira.sdk';
import { capitalize } from '../utils/helpers';
import Style from './Icon.module.scss';

export const Icon = props => {
    if (validators.isEmpty(props.iconName)) {
        return null;
    }

    const xIconName = '-i_' + props.iconName;
    const xClass = classNames(Style.root, xIconName, props.className, {
        [Style[`color${capitalize(props.color)}`]]: props.color !== 'default'
    });

    const isNumber = pSize => {
        return validators.isNumber(pSize);
    };

    const isValidSize = pSize => {
        if (isNumber(pSize)) {
            return `${pSize}px`;
        } else {
            return '24px';
        }
    };

    return (
        <svg
            width={isValidSize(props.size)}
            height={isValidSize(props.size)}
            className={xClass}
            style={props.style}
            viewBox={'0 0 24 24'}>
            <use href={`#${xIconName}`} xlinkHref={`#${xIconName}`} />
        </svg>
    );
};

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
        'textPrimary',
        'textSecondary'
    ])
};

Icon.defaultProps = {
    color: 'default',
    size: '24'
};

export default Icon;
