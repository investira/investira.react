import React from 'react';
import { Typography, Icon } from '../';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Style from './InfoBool.module.scss';

function InfoBool(props) {
    const xClass = classNames(props.className, Style.root, {
        [Style.gutter]: props.gutter
    });
    return (
        <div className={xClass}>
            <Typography
                variant={props.variant}
                color={props.labelColor}
                component="p">
                {props.label}
            </Typography>
            <Icon
                color={props.value ? 'greenLight' : 'danger'}
                iconName={props.value ? 'check' : 'cancel'}
                size={props.value ? 24 : 18}
            />
        </div>
    );
}

InfoBool.defaultProps = {
    variant: 'caption',
    labelColor: 'textSecondary'
};

InfoBool.propTypes = {
    onClick: PropTypes.func,
    gutter: PropTypes.bool,
    label: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
    labelColor: PropTypes.string,
    value: PropTypes.bool
};

export default InfoBool;
