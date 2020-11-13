import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Tooltip from '../wrapper-material-ui/Tooltip';
import Style from './CopyToClipboard.module.scss';

class CopyToClipboard extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            iconName: 'paper',
            tooltip: 'Copiar'
        };

        this.body = document.getElementsByTagName('body')[0];

        this.timeout = null;
    }

    copyToClipboard = (pValue, pEvent) => {
        pEvent.stopPropagation();
        const tempInput = document.createElement('input');
        this.body.appendChild(tempInput);
        tempInput.setAttribute('value', pValue.toString());
        tempInput.select();
        document.execCommand('copy');
        this.body.removeChild(tempInput);

        this.setState({
            iconName: 'ok',
            tooltip: 'COPIADO!'
        });
    };

    resetState = () => {
        this.timeout = setTimeout(() => {
            this.setState({
                iconName: 'paper',
                tooltip: 'Copiar'
            });
        }, 1000);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.iconName !== this.state.iconName) {
            this.resetState();
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return (
            <Tooltip title={this.state.tooltip} placement="top">
                <button
                    className={Style.root}
                    onClick={e => this.copyToClipboard(this.props.value, e)}>
                    <Icon
                        iconName={this.state.iconName}
                        size={16}
                        color={'primary'}
                    />
                </button>
            </Tooltip>
        );
    }
}

CopyToClipboard.propTypes = {
    value: PropTypes.string
};

export default CopyToClipboard;
