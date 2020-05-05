import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Scroller, Loading, CenterInView } from '../';
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

    readJsontFile = (pUri, pElem) => {
        return pUri;
    };

    readHtmlFile = (pUri, pElem) => {
        return pUri;
    };

    readString = (pData, pElem) => {
        this.renderFormatedLog(pElem, pData);
    };

    readData = (pType, pData, pRef) => {
        const reader = {
            txt: this.readTextFile,
            json: this.readJsontFile,
            html: this.readHtmlFile,
            string: this.readString
        };

        const pElem = pRef.current;

        reader[pType](pData, pElem);
    };

    formatText = pData => {
        const xDataFormated = pData.replace(/\[([a-z]*)\]/gm, (match, p1) => {
            return `<span class='${Style[p1]}'>${match}</span>`;
        });

        return xDataFormated;
    };

    componentDidMount() {
        const { uri, data, type } = this.props;

        this.readData(type, data || uri, this.log);
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
    uri: PropTypes.string,
    type: PropTypes.oneOf(['txt', 'json', 'html', 'string'])
};

export default LogReader;
