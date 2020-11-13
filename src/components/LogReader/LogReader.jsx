import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Scroller, InfiniteScroller, Loading, Typography } from '../';

import { validators } from 'investira.sdk';

import Style from './LogReader.module.scss';

class LogReader extends PureComponent {
    constructor(props) {
        super(props);

        this.log = React.createRef();
        this.scroller = React.createRef();
        this.timeout = null;

        this.state = {
            OnMountScrolled: false
        };
    }

    onMountScroll = (pScrolled, pScrollOnMount) => {
        if (!pScrolled && pScrollOnMount) {
            this.setState({ OnMountScrolled: true }, () =>
                window.setTimeout(this.autoScroller, 300)
            );
        }
    };

    renderFormatedLog = (pElem, pData, pFormater) => {
        if (pFormater) {
            const xDataFormated = pFormater(pData);
            pElem.innerHTML = `<span>${xDataFormated}</span>`;
        } else {
            pElem.innerHTML = pData;
        }

        this.onMountScroll(
            this.state.OnMountScrolled,
            this.props.scrollOnMount
        );

        this.timeout =
            this.props.autoScroller &&
            window.setTimeout(this.autoScroller, 300);
    };

    readTextFile = (pUri, pElem) => {
        const file = `${pUri}.txt`;

        fetch(file)
            .then(rRes => {
                return rRes.text();
            })
            .then(rData => {
                this.renderFormatedLog(pElem, rData, this.formatText);
            })
            .catch(rErr => {
                const xErrorMessage = `<span>Falha ao tentar carregar: ${file}</span>`;
                this.renderFormatedLog(pElem, xErrorMessage);
            });
    };

    readJsontFile = (pData, pElem) => {
        this.renderFormatedLog(
            pElem,
            JSON.stringify(pData, null, 2),
            this.formatJson
        );
    };

    readHtmlFile = (pUri, pElem) => {
        return pUri;
    };

    readString = (pData, pElem) => {
        this.renderFormatedLog(pElem, pData, this.formatText);
    };

    readData = (pType, pData, pRef, pAutoScroller) => {
        const pElem = pRef.current;
        const reader = {
            txt: this.readTextFile,
            json: this.readJsontFile,
            html: this.readHtmlFile,
            string: this.readString
        };

        // let xData = pData;

        reader[pType](pData, pElem);
    };

    formatText = pData => {
        const xDataFormated = pData.replace(/\[([a-z]*)\]/gm, (match, p1) => {
            return `<span class='${Style[p1]}'>${match}</span>`;
        });

        return xDataFormated;
    };

    formatJson = pData => {
        let xDataFormated = pData.replace(
            /\"level":\s"(.*)",/gm,
            (match, p1) => {
                return `"level": <span class='${Style[p1]}'>"${p1}"</span>`;
            }
        );

        xDataFormated = xDataFormated.replace(
            /\"message":\s"(.*)",/gm,
            (match, p1) => {
                return `"message": <span class='${Style.message}'>"${p1}"</span>`;
            }
        );

        return xDataFormated;
    };

    autoScroller = () => {
        if (this.scroller && this.scroller.current) {
            const xCurrentScroller = this.scroller.current;
            const xScroller = xCurrentScroller.scroller
                ? xCurrentScroller.scroller.current.scrollRef.current
                : this.scroller.current.scrollRef.current;
            xScroller.scrollTo(0, xScroller.scrollHeight);
        } else {
            console.info('Componente Scroller não encontrado');
        }
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
        if (data || uri || responseData) {
            this.readData(type, data || uri || responseData, this.log);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const Component = validators.isEmpty(this.props.scrollerProps)
            ? Scroller
            : InfiniteScroller;

        return (
            <>
                {this.props.label && (
                    <Typography
                        variant={'body2'}
                        color={'textSecondary'}
                        gutterBottom>
                        {this.props.label}
                    </Typography>
                )}
                <div className={Style.root}>
                    <Component
                        ref={this.scroller}
                        {...this.props.scrollerProps}>
                        <pre className={Style.log}>
                            <code id={'log'} ref={this.log}>
                                <Loading />
                            </code>
                        </pre>
                    </Component>
                </div>
            </>
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
    type: PropTypes.oneOf(['txt', 'json', 'html', 'string']),
    label: PropTypes.string,
    autoScroller: PropTypes.bool,
    scrollerProps: PropTypes.object,
    scrollOnMount: PropTypes.bool
};

LogReader.defaultProps = {
    type: 'string',
    autoScroller: true,
    scrollerProps: {},
    scrollOnMount: false
};

export default LogReader;
