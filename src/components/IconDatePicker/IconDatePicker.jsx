import React, { useState } from 'react';
import { Icon, IconButton, DatePicker } from '../';

import Style from './IconDatePicker.module.scss';
import PropTypes from 'prop-types';

function IconDatePicker(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, handleDateChange] = useState(props.value || null);

    const handleChange = pValue => {
        props.onChange && props.onChange(pValue);
        handleDateChange(pValue);
    };

    const { id, ...DatePickerProps } = props;

    return (
        <>
            <IconButton onClick={() => setIsOpen(true)} color={'primary'}>
                <Icon color={'primary'} iconName={'calendar'} />
            </IconButton>
            <div className={Style.picker}>
                <DatePicker
                    id={`datepicker_${id}`}
                    format={'DD/MMM/YYYY'}
                    locale={'pt-br'}
                    {...DatePickerProps}
                    value={selectedDate}
                    onChange={handleChange}
                    open={isOpen}
                    friendly={false}
                    emptyLabel={'Selecione uma data'}
                    onOpen={() => setIsOpen(true)}
                    onClose={() => setIsOpen(false)}
                />
            </div>
        </>
    );
}

IconDatePicker.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    id: PropTypes.string
};

export default IconDatePicker;
