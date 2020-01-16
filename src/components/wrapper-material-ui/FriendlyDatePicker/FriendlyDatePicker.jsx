import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Typography } from '../';
import { dates } from 'investira.sdk';

const useStyles = makeStyles(
    theme => {
        return {
            root: {
                position: 'relative',
                display: 'flex',
                justifyContent: 'start',
                alignContent: 'center',
                flexWrap: 'wrap'
            },
            monthYear: {
                padding: '3px 0'
            },
            day: {
                marginRight: '8px',
                color: theme.palette.primary.main
            },
            label: {
                width: '100%'
            },
            locked: {
                color: theme.palette.secondary.light
            },
            disabled: {
                color: theme.palette.secondary.light
            }
        };
    },
    { name: 'FriendlyDatePicker' }
);

const FriendlyDatePicker = props => {
    const classes = useStyles();

    const xMomentUtils = new props.utils({
        locale: props.locale
    });
    const xCurrentDate = xMomentUtils.date(props.value);
    const xTodayDate = xMomentUtils.date(dates.toDate());

    const xDate = {
        year: xMomentUtils.getYearText(xCurrentDate),
        month: xMomentUtils.getMonthText(xCurrentDate),
        day: xMomentUtils.getDayText(xCurrentDate),
        today: xMomentUtils.isSameDay(xCurrentDate, xTodayDate)
    };

    const xClassDay = classNames(classes.day, {
        [classes.locked]: props.locked,
        [classes.disabled]: props.disabled
    });

    const xClassMonthYear = classNames(classes.monthYear, {
        [classes.locked]: props.locked,
        [classes.disabled]: props.disabled
    });

    return (
        <div className={classes.root}>
            <div className={classes.label}>
                <Typography color={'textSecondary'} variant={'caption'}>
                    {props.label}
                </Typography>
            </div>
            {xDate.today ? (
                <div className={xClassDay}>
                    <Typography
                        color={'inherit'}
                        variant={'h4'}
                        style={{ lineHeight: '1.4' }}>
                        Hoje
                    </Typography>
                </div>
            ) : (
                <>
                    <div className={xClassDay}>
                        <Typography color={'inherit'} variant={'h3'}>
                            {xDate.day}
                        </Typography>
                    </div>

                    <div className={xClassMonthYear}>
                        <div className={classes.month}>
                            <Typography color={'inherit'} variant={'caption'}>
                                {xDate.month}
                            </Typography>
                        </div>
                        <div className={classes.year}>
                            <Typography color={'inherit'} variant={'body1'}>
                                {xDate.year}
                            </Typography>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default FriendlyDatePicker;
