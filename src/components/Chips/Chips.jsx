import React, { Component } from 'react';
import classNames from 'classnames';
import { Typography, Chip } from '../wrapper-material-ui';
import unsupportedProp from '../utils/unsupportedProp';
import Style from './Chips.module.scss';
import PropTypes from 'prop-types';
import { validators } from 'investira.sdk';

class Chips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: null,
            keepFocus: true,
            data: [],
            initialFocus: true
        };
        this.chipsList = [];
        this.xElemsReact = [];
        this.scrollableRef = React.createRef();
        this.elemFocusIndex = 0;
        this.timeout = null;
    }

    forwardRef = pRef => {
        this.scrollableRef = pRef;
    };

    centerInScroll(pIndex) {
        const xSelected = pIndex || 0;
        const xFocusElem = this.chipsList[xSelected];
        if (xFocusElem) {
            const xFocusElemRect = xFocusElem.getBoundingClientRect();
            const xScrollElem = this.scrollableRef.current;
            const xScrollElemRect = xScrollElem.getBoundingClientRect();
            const xSpacer = (xScrollElemRect.width - xFocusElemRect.width) / 2;

            xScrollElem.scrollLeft = this.xElemsReact[xSelected].x - xSpacer;
        }
        window.clearTimeout(this.timeout);
    }

    handleClick = (pData, pIndex) => () => {
        this.centerInScroll(pIndex);
        this.elemFocusIndex = pIndex;
        this.setState({
            focus: pData.value
        });

        this.props.onClick && this.props.onClick(pData, pIndex);
    };

    handleScroll = () => {
        window.clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.centerInScroll(this.elemFocusIndex);
        }, 2000);
    };

    handleDelete = pData => {
        this.setState(state => {
            const data = [...state.data];
            const deleteChip = data.indexOf(pData);
            data.splice(deleteChip, 1);
            return { data };
        });

        this.props.onDelete(pData);
    };

    getChipsPosition(pElement) {
        pElement && this.xElemsReact.push(pElement.getBoundingClientRect());
    }

    chipFocusfy(pFocus) {
        for (let xI = 0; xI < this.chipsList.length; xI++) {
            const xElement = this.chipsList[xI];
            this.getChipsPosition(xElement);
        }
    }

    initFocus(pFocus) {
        const xChipsList = this.chipsList.filter(xElem => {
            return xElem !== null;
        });

        for (let xI = 0; xI < xChipsList.length; xI++) {
            const xElement = xChipsList[xI];

            if (xElement.children[0].id === pFocus) {
                this.centerInScroll(xI);
                this.elemFocusIndex = xI;
            }
        }

        this.setState({
            initialFocus: false
        });
    }

    focusStyle(pFocus) {
        let xFocus = this.state.focus || this.props.initialFocus;
        let style = {
            color: 'var(--color-black-90)',
            backgroundColor: 'var(--color-primary)'
        };

        if (pFocus === xFocus && this.state.keepFocus) {
            return style;
        }

        return {};
    }

    componentDidMount() {
        this.setState({
            focus: this.props.initialFocus,
            data: Object.values(this.props.data)
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.focus !== this.props.initialFocus) {
            this.chipFocusfy(this.props.initialFocus);

            if (this.state.initialFocus) {
                this.initFocus(this.props.initialFocus);
            }
        }

        if (prevProps.data !== this.props.data) {
            this.setState(
                {
                    focus: this.props.initialFocus,
                    data: Object.values(this.props.data)
                },
                () => {
                    this.initFocus(this.state.focus);
                }
            );
        }
    }

    componentWillUnmount() {
        this.timeout && window.clearTimeout(this.timeout);
    }

    render() {
        const chips = this.state.data.map((pObj, pIndex) => {
            return (
                <div
                    key={pIndex}
                    ref={elem => (this.chipsList[pIndex] = elem)}
                    className={Style.chipContainer}>
                    <Chip
                        id={pObj.value}
                        key={pObj.value}
                        style={this.focusStyle(pObj.value)}
                        avatar={pObj.avatar}
                        icon={pObj.icon}
                        label={pObj.label}
                        color={'primary'}
                        onClick={this.handleClick(pObj, pIndex)}
                        clickable={false}
                        variant={this.props.variant}
                        onDelete={
                            this.props.onDelete && this.handleDelete(pObj)
                        }
                        disabled={pObj.disabled || false}
                    />
                </div>
            );
        });

        const xClassName = classNames(Style.root, {
            [Style.withLabel]: !validators.isEmpty(this.props.label)
        });

        return (
            <div className={xClassName} onScroll={() => this.handleScroll()}>
                {this.props.label && (
                    <div className={Style.chipsLabel}>
                        <Typography variant={'caption'} color={'textSecondary'}>
                            {this.props.label}
                        </Typography>
                    </div>
                )}
                {this.props.data ? (
                    <div
                        ref={this.scrollableRef}
                        className={Style.horizontalScrollable}>
                        {chips}
                    </div>
                ) : (
                    <Typography variant={'caption'} color={'textSecondary'}>
                        Informe o atributo data
                    </Typography>
                )}
            </div>
        );
    }
}

Chips.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    children: unsupportedProp,
    label: PropTypes.string,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    variant: PropTypes.oneOf(['default', 'outlined']),
    deleteIcon: PropTypes.element,
    icon: PropTypes.element,
    keepFocus: PropTypes.bool
};

Chips.defaultProps = {
    name: 'default',
    color: 'default',
    variant: 'default'
    //keepFocus: true
};

export default Chips;
