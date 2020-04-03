import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Scroller, Loading } from '../';
import Style from './LogReader.module.scss';

class LogReader extends PureComponent {
    constructor(props) {
        super(props);

        this.log = React.createRef();
    }

    readTextFile = (pUri, pElem) => {
        const file = `${pUri}.txt`;

        fetch(file)
            .then(rRes => {
                return rRes.text();
            })
            .then(rData => {
                const dataFormated = this.formatText(rData);
                pElem.innerHTML = `<span>${dataFormated}</span>`;
            });
    };

    readJsontFile = (pUri, pElem) => {
        console.log(pUri);
        return pUri;
    };

    readHtmltFile = (pUri, pElem) => {
        console.log(pUri);
        return pUri;
    };

    readFile = (pType, pUri, pRef) => {
        const reader = {
            txt: this.readTextFile,
            json: this.readJsontFile,
            html: this.readHtmltFile
        };

        const pElem = pRef.current;

        reader[pType](pUri, pElem);
    };

    formatText = pData => {
        const xDataFormated = pData.replace(/\[([a-z]*)\]/gm, (match, p1) => {
            return `<span class='log-label-${p1}'>${match}</span>`;
        });

        return xDataFormated;
    };

    componentDidMount() {
        const { uri, type } = this.props;
        this.readFile(type, uri, this.log);
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
    uri: PropTypes.string,
    type: PropTypes.string
};

export default LogReader;
