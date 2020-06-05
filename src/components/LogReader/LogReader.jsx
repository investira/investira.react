import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Scroller, Loading, CenterInView } from '../';

import {} from 'investira.sdk';

import Style from './LogReader.module.scss';

class LogReader extends PureComponent {
    constructor(props) {
        super(props);

        this.log = React.createRef();
    }

    renderFormatedLog = (pElem, pData, pFormat = true) => {
        if (pFormat) {
            const xDataFormated = this.formatText(pData);
            pElem.innerHTML = `<span>${xDataFormated}</span>`;
        } else {
            pElem.innerHTML = pData;
        }
    };

    readTextFile = (pUri, pElem) => {
        const file = `${pUri}.txt`;

        fetch(file)
            .then(rRes => {
                return rRes.text();
            })
            .then(rData => {
                this.renderFormatedLog(pElem, rData);
            })
            .catch(rErr => {
                const xErrorMessage = `<span>Falha ao tentar carregar: ${file}</span>`;
                this.renderFormatedLog(pElem, xErrorMessage, false);
            });
    };

    readJsontFile = (pData, pElem) => {
        this.renderFormatedLog(pElem, JSON.stringify(pData));
    };

    readHtmlFile = (pUri, pElem) => {
        return pUri;
    };

    readString = (pData, pElem) => {
        this.renderFormatedLog(pElem, pData);
    };

    readData = (pType, pData, pRef) => {
        console.log(pType, pData, pRef);
        const pElem = pRef.current;
        const reader = {
            txt: this.readTextFile,
            json: this.readJsontFile,
            html: this.readHtmlFile,
            string: this.readString
        };

        let xData = pData;

        reader[pType](pData, pElem);
    };

    formatText = pData => {
        const xDataFormated = pData.replace(/\[([a-z]*)\]/gm, (match, p1) => {
            return `<span class='${Style[p1]}'>${match}</span>`;
        });

        return xDataFormated;
    };

    componentDidUpdate(prevProps) {
        if (
            this.props.responseData &&
            this.props.responseData !== prevProps.responseData
        ) {
            const { uri, data, responseData, type } = this.props;
            this.readData(type, data || uri || responseData, this.log);
        }
    }

    componentDidMount() {
        const { uri, data, responseData, type } = this.props;

        this.readData(type, data || uri || responseData, this.log);
    }

    render() {
        return (
            <div className={Style.root}>
                <Scroller>
                    <pre className={Style.log}>
                        <code id={'log'} ref={this.log}>
                            <Loading />
                        </code>
                    </pre>
                </Scroller>
            </div>
        );
    }
}

LogReader.propTypes = {
    data: PropTypes.string,
    responseData: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    uri: PropTypes.string,
    type: PropTypes.oneOf(['txt', 'json', 'html', 'string'])
};

LogReader.defaultProps = {
    type: 'string'
};

export default LogReader;
