import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { validators } from 'investira.sdk';

import { TextField } from '../';

const MaskedTextField = memo(props => {
    const { maskIgnoreChars, maskFilterChar, mask, ...otherProps } = props;
    const clearValues = pValues => {
        if (!validators.isNull(pValues)) {
            return pValues.replace(/\.|-/g, '');
        }

        return pValues;
    };

    const [value, setValue] = useState(mask(clearValues(props.value)) || '');
    const formikContext = useFormikContext();

    let handleChange = null;

    if (!validators.isNull(formikContext)) {
        handleChange = formikContext.handleChange;
    }

    const handleOnChange = e => {
        let xValue = e.currentTarget.value;

        if (maskFilterChar) {
            const filteredValue = xValue.replace(maskFilterChar, '');
            xValue = filteredValue;
        }

        if (mask) {
            const normalizedValue = xValue.replace(maskIgnoreChars, '');
            const maskedValue = mask(normalizedValue);
            xValue = maskedValue ? maskedValue : xValue;
        }

        setValue(xValue);
    };

    const handleOnKeyUp = e => {
        handleChange && handleChange(e);
        props.onChange && props.onChange(e);
    };

    return (
        <TextField
            {...otherProps}
            value={value}
            onKeyUp={handleOnKeyUp}
            onChange={handleOnChange}
        />
    );
});

MaskedTextField.propTypes = {
    maskIgnoreChars: PropTypes.instanceOf(RegExp),
    maskFilterChar: PropTypes.instanceOf(RegExp),
    mask: PropTypes.func
};

MaskedTextField.defaultProps = {
    maskIgnoreChars: /[^\w\s]/gi
};

export default MaskedTextField;
