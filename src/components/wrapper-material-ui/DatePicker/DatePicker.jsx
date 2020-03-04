import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
    DatePicker as WDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers/';

import FriendlyDatePicker from '../FriendlyDatePicker/FriendlyDatePicker';
import 'moment/min/locales';

const useStyles = makeStyles(
    theme => ({
        root: {
            position: 'relative'
        },
        hidePicker: {
            position: 'absolute !important',
            top: '0',
            left: '0',
            opacity: '0',
            height: '100%'
        }
    }),
    { name: 'DatePicker' }
);

const DatePicker = props => {
    const classes = useStyles();

    const { friendly, locked, disabled, ...otherProps } = props;

    const xClassPicker = classNames(classes.picker, {
        [classes.hidePicker]: friendly
    });

    return (
        <MuiPickersUtilsProvider utils={MomentUtils} locale={props.locale}>
            {friendly && (
                <FriendlyDatePicker
                    utils={MomentUtils}
                    locale={props.locale}
                    locked={locked}
                    disabled={disabled}
                    {...otherProps}
                />
            )}

            <WDatePicker
                {...otherProps}
                disabled={locked || disabled}
                autoComplete={'off'}
                refuse={/[^\d]+/gi}
                cancelLabel="fechar"
                className={xClassPicker}
            />
        </MuiPickersUtilsProvider>
    );
};

DatePicker.propTypes = {
    friendly: PropTypes.bool
};

DatePicker.defaultProps = {
    friendly: true
};

export default DatePicker;
