import React from 'react';
import { Typography } from '../';
import classNames from 'classnames';
import { validators } from 'investira.sdk';
import PropTypes from 'prop-types';
import Style from './Info.module.scss';

function Info(props) {
    const xClass = classNames(props.className, {
        [Style.gutter]: props.gutter
    });
    return (
        <div className={xClass}>
            <Typography
                variant={props.variant || 'caption'}
                color={props.labelColor || 'textSecondary'}
                component="p">
                {props.label}
            </Typography>

            {validators.isEmpty(props.value) ? (
                <Typography
                    variant={props.variantValue || 'caption'}
                    color={'textPrimary'}
                    component="p">
                    --
                </Typography>
            ) : (
                <Typography
                    variant={props.variantValue || props.variant || 'caption'}
                    color={'textPrimary'}
                    component="p">
                    {props.value}
                </Typography>
            )}
        </div>
    );
}

Info.propTypes = {
    gutter: PropTypes.bool,
    label: PropTypes.string,
    date: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
    variantValue: PropTypes.string,
    labelColor: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ])
};

export default Info;
