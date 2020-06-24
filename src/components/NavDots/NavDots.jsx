import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Style from './NavDots.module.scss';
import { ButtonBase } from '../wrapper-material-ui';

class NavDots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wrapWidth: window.screen.width,
            wrapPosition: 0,
            actived: 0
        };

        this.btnRef = React.createRef();
    }

    handleClick = pIndex => {
        this.props.onClick && this.props.onClick(pIndex);
    };

    navigation = (pSize, pIndex, pDotWidth) => {
        const xTotalDots = pSize;
        const xTotalVisible = 5;
        const xOffset = 3;
        const xIntervalo = xTotalDots - xTotalVisible;
        const xWalker = pIndex + xOffset;
        const xMultiply = xTotalDots - (xWalker + xIntervalo);

        if (
            pIndex >= xTotalVisible - xOffset &&
            pIndex <= xTotalDots - xOffset
        ) {
            const xNewPos = pDotWidth * xMultiply;
            this.setState({
                wrapPosition: xNewPos
            });
        } else if (pIndex < xTotalVisible - xOffset) {
            const xStartPos = 0;
            this.setState({
                wrapPosition: xStartPos
            });
        } else if (pIndex > xTotalDots - xOffset) {
            const xEndPos = (xTotalDots - xTotalVisible) * pDotWidth;
            this.setState({
                wrapPosition: xEndPos * -1
            });
        }
    };

    componentDidMount() {
        this.setState({
            wrapWidth:
                this.props.size > 5
                    ? this.btnRef.current.offsetWidth * this.props.size
                    : '100%'
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.index !== this.props.index) {
            if (this.props.size > 5) {
                this.navigation(
                    this.props.size,
                    this.props.index,
                    this.btnRef.current.offsetWidth
                );
            }
        }
    }

    render() {
        const xChilds = [];

        const xClassWrap = classNames(Style.wrap, this.props.className, {
            [Style.wrapJustifyStart]: this.props.size > 5
        });

        for (let xI = 0; xI < this.props.size; xI++) {
            xChilds.push(
                <div ref={this.btnRef} key={xI}>
                    <ButtonBase
                        centerRipple={true}
                        onClick={() => this.handleClick(xI)}>
                        <div className={Style.btn}>
                            <span
                                className={`${Style.dot} ${
                                    this.props.index === xI ? Style.actived : ''
                                }`}
                            />
                        </div>
                    </ButtonBase>
                </div>
            );
        }

        return (
            <div className={Style.root}>
                <div
                    className={xClassWrap}
                    style={{
                        width: this.state.wrapWidth,
                        transform: `translate(${this.state.wrapPosition}px,0px)`
                    }}>
                    {xChilds}
                </div>
            </div>
        );
    }
}

NavDots.propTypes = {
    onClick: PropTypes.func,
    size: PropTypes.number
};

export default NavDots;
