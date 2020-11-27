import React from 'react';
import { Typography } from '../';
import classNames from 'classnames';
import { validators } from 'investira.sdk';
import PropTypes from 'prop-types';
import Style from './Info.module.scss';

function Info(props) {
    const xClass = classNames(props.className, {
        [Style.gutter]: props.gutter === 'full',
        [Style.gutterLeft]: props.gutter === 'left',
        [Style.gutterRight]: props.gutter === 'right',
        [Style.horizontal]: props.direction === 'horizontal'
    });
    const xClassMargin = classNames({
        [Style.margin]: props.direction === 'horizontal'
    });
    return (
        <div onClick={props.onClick} className={xClass}>
            <div className={xClassMargin}>
                <Typography
                    variant={props.variant}
                    color={props.labelColor}
                    gutterBottom={props.gutterBottom}
                    component="p">
                    {props.label}
                    {(props.colon || props.direction === 'horizontal') && ':'}
                </Typography>
            </div>
            {validators.isEmpty(props.value) ? (
                <Typography
                    variant={props.variantValue}
                    color={props.valueColor}
                    gutterBottom={props.gutterBottom}
                    component="p">
                    --
                </Typography>
            ) : (
                <Typography
                    variant={props.variantValue || props.variant}
                    color={props.valueColor}
                    gutterBottom={props.gutterBottom}
                    component="p">
                    {props.value}
                </Typography>
            )}
        </div>
    );
}

Info.defaultProps = {
    variant: 'caption',
    labelColor: 'textSecondary',
    gutterBottom: true,
    valueColor: 'textPrimary',
    variantValue: 'caption',
    direction: 'vertical',
    colon: false
};

Info.propTypes = {
    onClick: PropTypes.func,
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
    colon: PropTypes.bool,
    gutter: PropTypes.oneOf(['left', 'full', 'right']),
    gutterBottom: PropTypes.bool,
    label: PropTypes.string,
    date: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
    variantValue: PropTypes.string,
    labelColor: PropTypes.string,
    valueColor: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ])
};

export default Info;
