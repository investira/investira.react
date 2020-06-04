import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { validators } from 'investira.sdk';

import { CenterInView } from '../template';
import { Typography } from '../';

class SSE extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: props.initialValue,
            error: false
        };

        this.isMount = false;

        this.eventSource = new EventSource(props.route);
        console.log(this.eventSource);
    }

    updateResponseData = (pReponseData, pPrevData) => {
        const xResponseDataParsed = JSON.parse(pReponseData);

        const xResponseData = validators.isArray(xResponseDataParsed)
            ? [...pPrevData, ...xResponseDataParsed]
            : { ...pPrevData, ...xResponseDataParsed };

        this.isMount &&
            this.setState({
                data: xResponseData
            });
    };

    updateError = pValue => {
        this.isMount &&
            this.setState({
                error: pValue
            });
    };

    componentDidMount() {
        this.isMount = true;

        this.eventSource.onopen = e => {
            console.log(e.data);
        };

        this.eventSource.onmessage = e => {
            console.log(e.data);
            this.updateResponseData(e.data, this.state.data);
        };

        this.eventSource.onerror = e => {
            console.log(e.data);
            this.updateError(true);
        };
    }

    componentWillUnmount() {
        this.isMount = false;
        this.eventSource.close();
    }

    render() {
        if (this.state.error) {
            return (
                <CenterInView>
                    <Typography
                        color={'textSecondary'}
                        variant={'caption'}
                        align={'center'}
                        component={'p'}>
                        Falha na conexão SSE
                    </Typography>
                </CenterInView>
            );
        }

        return React.cloneElement(React.Children.only(this.props.children), {
            responseData: this.state.data
        });
    }
}

SSE.propTypes = {
    children: PropTypes.element.isRequired,
    route: PropTypes.string.isRequired,
    initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

SSE.defaultProps = {
    initialValue: {}
};

export default SSE;
