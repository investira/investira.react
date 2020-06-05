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
    }

    updateResponseData = (pReponseData, pPrevData, pSize) => {
        const xResponseDataParsed = JSON.parse(pReponseData);
        let xResponseData = null;

        if (validators.isArray(xResponseDataParsed)) {
            const xDataSize = pPrevData.length;
            if (xDataSize > pSize) {
                pPrevData = pPrevData.slice(pSize * -1);
            }
            xResponseData = [...pPrevData, ...xResponseDataParsed];
        } else {
            xResponseData = { ...pPrevData, ...xResponseDataParsed };
        }

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

        // this.eventSource.onopen = e => {
        //     console.log(e.data);
        // };

        this.eventSource.onmessage = e => {
            this.updateResponseData(e.data, this.state.data);
        };

        this.eventSource.onerror = e => {
            !validators.isNull(e.data) && this.updateError(true);
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
    initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    size: PropTypes.number
};

SSE.defaultProps = {
    initialValue: {},
    size: 100
};

export default SSE;
