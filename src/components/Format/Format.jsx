import React from 'react';
import PropTypes from 'prop-types';
import { formats } from 'investira.sdk';
import { Rate } from '../';
import { Typography } from 'investiraComponents';

function Format(props) {
    const formatValue = (pType, pValue, pDecimais) => {
        const xValue = {
            currency:
                typeof pValue === 'string'
                    ? pValue
                    : formats.friendlyNumber(pValue, pDecimais || 2, true),
            number:
                typeof pValue === 'string'
                    ? pValue
                    : formats.formatNumber(pValue, pDecimais || 0, true, false),
            date: formats.formatDate(pValue),
            hour: typeof pValue === 'string' ? pValue : formats.formatDateCustom(pValue, 'HH:mm'),
            rate: <Rate value={pValue} status={props.status} size={props.size} />,
            text: pValue,
            percentual: `${pValue}%`
        };

        return xValue[pType] || pValue;
    };

    return (
        <Typography
            variant={props.variant}
            color={props.color}
            align={props.align}
            className={props.className}>
            {formatValue(props.format, props.value, props.decimais)}
        </Typography>
    );
}

Format.propTypes = {
    format: PropTypes.oneOf(['currency', 'number', 'percentual', 'rate', 'date', 'hour', 'text']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    size: PropTypes.number,
    variant: PropTypes.string,
    color: PropTypes.string,
    status: PropTypes.oneOf([0, 1, 2])
};

Format.defaultProps = {
    format: 'text',
    value: 0,
    color: 'textPrimary',
    size: 16,
    variant: 'caption',
    status: 1
};

export default Format;
