import React, { Component } from 'react';
import { currency } from 'investiraLib';
import { validators } from 'investira.sdk';
import PropTypes from 'prop-types';

class InputCurrency extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || ''
        };
    }

    formatTextValue = (pValue = '') => {
        const xValue = validators.isNumber(pValue)
            ? pValue.toFixed(this.props.decimal)
            : pValue;

        return currency.toCurrency(
            xValue.toString(),
            '.',
            this.props.currency,
            'pt-BR',
            this.props.decimal
        );
    };

    handleChange = pEvent => {
        const xValueAsCurrency = this.formatTextValue(pEvent.target.value);

        this.setState({ value: xValueAsCurrency });

        if (this.props.onChange) {
            pEvent.persist();
            this.props.onChange(
                pEvent,
                currency.currencyToNumber(
                    xValueAsCurrency,
                    '.',
                    this.props.decimal
                )
            );
        }
    };

    get value() {
        return this.state.value || this.props.value;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.formatTextValue(this.props.value) !== this.state.value) {
            this.setState({
                value: this.formatTextValue(this.props.value)
            });
        }
    }

    render() {
        const {
            handleChange,
            props: { defaultValue, separator, inputRef, ...inputProps },
            value
        } = this;

        return (
            <div>
                <input
                    ref={inputRef}
                    {...inputProps}
                    type="text"
                    pattern="\d*"
                    value={value}
                    data-numeric-input
                    onChange={handleChange}
                />
            </div>
        );
    }
}

InputCurrency.propTypes = {
    onChange: PropTypes.func,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string,
    separator: PropTypes.oneOf(['.', ','])
};

InputCurrency.defaultProps = {
    defaultValue: '0.00',
    separator: ',',
    currency: 'BRL'
};

export default InputCurrency;
