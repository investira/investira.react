import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Hammer from 'hammerjs';
import NavDots from '../NavDots';
import Icon from '../Icon';
import { ButtonBase, IconButton } from '../wrapper-material-ui';
import Style from './SlideView.module.scss';

export class SlideView extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            wrapWidth: 0,
            wrapPosition: 0,
            slideWidth: 0,
            slideCount: 0,
            slideCurrent: 0,
            backButton: false,
            nextButton: true,
            swipeable: this.props.swipeable,
            roadmap: [],
            triggerNext: false
        };

        this.state = {
            ...this.initialState
        };

        this.slideRef = React.createRef();
        this.slideWrapRef = React.createRef();
        this.slideChildRef = React.createRef();

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    _isMounted = false;

    dotsButtons(pChildrens) {
        const xMaxDots = 5;

        let xCurrent = [...pChildrens];

        xCurrent.slice(
            this.state.slideCurrent,
            this.state.slideCurrent + xMaxDots
        );

        const elements = xCurrent.map((_, i) => {
            const isActive =
                this.state.slideCurrent === i ? Style.isActive : '';

            return (
                <ButtonBase
                    key={i}
                    centerRipple={true}
                    className={Style.dotButton}
                    onClick={() => this.move(i)}>
                    <span className={Style.dot + ' ' + isActive} />
                </ButtonBase>
            );
        });

        return elements;
    }

    nextSlide = () => {
        if (this.state.slideCurrent < this.state.slideCount - 1) {
            this.setState(
                {
                    slideCurrent: this.state.slideCurrent + 1
                },
                () => this.move(this.state.slideCurrent)
            );
        }
    };

    prevSlide = () => {
        if (this.state.slideCurrent > 0) {
            this.setState({ slideCurrent: this.state.slideCurrent - 1 }, () =>
                this.move(this.state.slideCurrent)
            );
        }
    };

    mapChildrens = () => {
        // let xClass = !this.state.swipeable
        // ? this.props.classes.view + ' ' + this.props.classes.noTouchable
        // : this.props.classes.view;

        let xClass = this.props.fullWidth ? Style.viewFull : Style.view;

        let elements = this.props.children.map((child, i) => {
            return (
                <div
                    key={`${this.props.id}-${i}`}
                    ref={this.slideChildRef}
                    id={`slideview-${i}`}
                    className={xClass}
                    style={{
                        //width: this.state.itemWidth + 'px',
                        zIndex: 100 - i
                    }}>
                    {child}
                </div>
            );
        });

        return elements;
    };

    setElementsSizes() {
        if (this._isMounted) {
            let xChildCount = React.Children.count(this.props.children);
            let xSlideWidth = this.slideRef.current.offsetWidth;
            let xSlideChildWidth = this.slideChildRef.current.offsetWidth;
            let xWrapWidth = xSlideWidth;

            // const xNewState = {
            //     wrapWidth: xWrapWidth,
            //     slideWidth: xSlideWidth,
            //     slideChildWidth: xSlideChildWidth,
            //     slideCount: xChildCount
            // };

            this.setState({
                wrapWidth: xWrapWidth,
                slideWidth: xSlideWidth,
                slideChildWidth: xSlideChildWidth,
                slideCount: xChildCount
            });
        }
    }

    onPan(e) {
        e.preventDefault();
        let xDelta = e.deltaX;
        let xPercent = (100 / this.state.wrapWidth) * xDelta;

        let xAnimate = false;

        if (e.type === 'panend' || e.type === 'pancancel') {
            if (Math.abs(xPercent) > 21 && e.type === 'panend') {
                let xSlideCurrent = this.state.slideCurrent;
                //console.log((xSlideCurrent += xPercent));

                this.setState({
                    slideCurrent: (xSlideCurrent += xPercent < 0 ? 1 : -1)
                });

                // console.log('slideCount', this.state.slideCount);
                // console.log('slideCurrent', this.state.slideCurrent);
                // console.log('xPercent', xPercent);
                // console.log('xDelta', xDelta);

                if (
                    this.state.swipeable &&
                    this.state.slideCount === this.state.slideCurrent &&
                    xPercent < -50
                ) {
                    this.props.onSlideFinish && this.props.onSlideFinish();
                }
            }

            xPercent = 0;
            xAnimate = true;
        }

        this.move(this.state.slideCurrent, xPercent, xAnimate);
    }

    move = (pMoveIndex, pPercent, pAnimate) => {
        if (this._isMounted) {
            this.setState({
                slideCurrent: pMoveIndex
            });

            let xMoveIndex = Math.max(
                0,
                Math.min(pMoveIndex, this.state.slideCount - 1)
            );
            let xPercent = pPercent || 0;
            let xClassName = this.slideWrapRef.current.className;

            if (pAnimate) {
                if (xClassName.indexOf(Style.swapped) === -1) {
                    this.slideWrapRef.current.className += ` ${Style.swapped}`;
                }
            } else {
                if (xClassName.indexOf(Style.swapped) !== -1) {
                    this.slideWrapRef.current.className = xClassName
                        .replace(Style.swapped, '')
                        .trim();
                }
            }

            let xViewIndex, xPos, xTranslate;

            for (
                xViewIndex = 0;
                xViewIndex < this.state.slideCount;
                xViewIndex++
            ) {
                // fullWith
                // xPos =
                //     (this.state.wrapWidth / 100) *
                //     ((xViewIndex - xMoveIndex) * 100 + xPercent);

                // Exibe parte do próximo

                if (this.props.fullWidth) {
                    xPos =
                        (this.state.wrapWidth / 100) *
                        ((xViewIndex - xMoveIndex) * 100 + xPercent);
                } else {
                    xPos =
                        (this.state.slideChildWidth / 100) *
                        ((xViewIndex - xMoveIndex) * 100 + xPercent);
                    xPos = xPos + 12;
                }

                // xPos =
                //     (this.state.slideChildWidth / 100) *
                //     ((xViewIndex - xMoveIndex) * 100 + xPercent);

                // console.log('xViewIndex', xViewIndex);
                // console.log('xMoveIndex', xMoveIndex);

                // xPos = xPos + 12;

                if (Hammer.DIRECTION_HORIZONTAL) {
                    xTranslate = 'translate3d(' + xPos + 'px, 0, 0)';
                }

                this.views[xViewIndex].style.transform = xTranslate;
                this.views[xViewIndex].style.mozTransform = xTranslate;
                this.views[xViewIndex].style.webkitTransform = xTranslate;
            }

            this.setState(
                {
                    slideCurrent: xMoveIndex,
                    backButton: xMoveIndex > 0 ? true : false,
                    nextButton:
                        xMoveIndex < this.state.slideCount - 1 ? true : false
                },
                () => {
                    this.props.slideCallback &&
                        this.props.slideCallback(this.state);
                }
            );
        }
    };

    swipeable() {
        /*
         * Resolve Bug no Chrome Mobile
         */

        if (this.props.fullWidth) {
            let views = this.slideWrapRef.current.querySelectorAll(
                `div[id^="slideview-"]`
            );

            function logArrayElements(element) {
                let xHammer = Hammer(element);
                xHammer.on('swipe', () => {
                    return false;
                });
            }

            views.forEach(logArrayElements);
        }

        /* --- */
        let hammer = new Hammer(this.slideWrapRef.current, {
            inputClass:
                Hammer.TouchMouseInput /* Truque para permitir o pan horizontal e a rolagem */
        });
        //let hammer = new Hammer.Manager(this.slideWrapRef.current);

        //hammer.domEvents = true;

        hammer.add(
            new Hammer.Pan({
                direction: Hammer.DIRECTION_HORIZONTAL,
                threshold: 30
            })
        );

        // hammer.on(
        //     'panstart panmove panend pancancel',
        //     Hammer.bindFn(this.onPan, this)
        // );

        hammer.on('panmove panend pancancel', Hammer.bindFn(this.onPan, this));
    }

    mount = () => {
        this.views = Array.prototype.slice.call(
            this.slideWrapRef.current.children,
            0
        );

        this.setElementsSizes();
        this.props.swipeable && this.swipeable();
    };

    componentDidMount() {
        this._isMounted = true;
        // this.views = Array.prototype.slice.call(
        //     this.slideWrapRef.current.children,
        //     0
        // );

        // this.setElementsSizes();
        // this.props.swipeable && this.swipeable();

        // window.addEventListener('resize', () => {
        //     this.setElementsSizes();
        //     this.move(this.state.slideCurrent);
        // });
        this.mount();
        window.addEventListener('resize', () => {
            this.setElementsSizes();
            this.move(this.state.slideCurrent);
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('resize', () => {
            this.setElementsSizes();
            this.move(this.state.slideCurrent);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            this.props.slideCallback &&
            this.state.slideCurrent !== prevState.slideCurrent
        ) {
            this.props.slideCallback(this.state);
        }

        if (this.state.slideCount !== prevState.slideCount) {
            this.move(this.state.slideCurrent);
        }

        if (this.props.step !== prevProps.step) {
            this.move(this.props.step);
        }

        if (this.props.children !== prevProps.children) {
            this.views = Array.prototype.slice.call(
                this.slideWrapRef.current.children,
                0
            );
            let xChildCount = React.Children.count(this.props.children);
            this.setState({
                slideCount: xChildCount
            });
            // this.setState(
            //     { ...this.initialState },
            //     () => this.slideChildRef.current && this.mount()
            // );
        }

        if (this.props.triggerNext !== prevProps.triggerNext) {
            this.setState({
                triggerNext: this.props.triggerNext
            });
        }

        if (
            this.state.triggerNext !== prevState.triggerNext &&
            this.state.triggerNext === true
        ) {
            this.move(this.state.slideCurrent + 1);
        }

        // if (this.props.backButton !== prevProps.backButton) {
        //     this.setState({
        //         backButton: this.props.backButton
        //     });
        // }
    }

    render() {
        const { area, nav, className } = this.props;

        const xRootClass = classNames(Style.root, className, {
            [Style.container]: area === 'container'
        });

        const xNavClass = classNames(Style.nav, {
            [Style.isNavDot]: nav === 'dots',
            [Style.isNavArrow]: nav === 'arrows'
        });

        return (
            <div className={xRootClass} ref={this.slideRef}>
                <div
                    className={Style.wrap}
                    ref={this.slideWrapRef}
                    style={{
                        transform: `translate(${this.state.wrapPosition}px)`
                    }}>
                    {this.mapChildrens()}
                </div>

                {nav ? (
                    <nav className={xNavClass}>
                        {nav === 'dots' ? (
                            <NavDots
                                size={this.props.children.length}
                                index={this.state.slideCurrent}
                                onClick={this.move}
                            />
                        ) : nav === 'arrows' ? (
                            <Fragment>
                                {this.props.onSlideStart &&
                                !this.state.backButton ? (
                                    <IconButton
                                        aria-label="voltar"
                                        onClick={this.props.onSlideStart}>
                                        <Icon
                                            color={'primary'}
                                            iconName="arrow-previous"
                                            size={24}
                                        />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        aria-label="voltar"
                                        onClick={this.prevSlide}
                                        disabled={
                                            !this.props.nextButton ||
                                            !this.state.backButton
                                        }>
                                        <Icon
                                            color={'primary'}
                                            iconName="arrow-previous"
                                            size={24}
                                        />
                                    </IconButton>
                                )}

                                {this.props.onSlideFinish &&
                                !this.state.nextButton ? (
                                    <IconButton
                                        className={Style.arrowButton}
                                        aria-label="finalizar"
                                        onClick={this.props.onSlideFinish}>
                                        <Icon
                                            color={'primary'}
                                            iconName="ok"
                                            size={24}
                                        />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        className={Style.arrowButton}
                                        aria-label="avançar"
                                        onClick={this.nextSlide}
                                        disabled={
                                            !this.props.nextButton ||
                                            !this.state.nextButton
                                        }>
                                        <Icon
                                            color={'primary'}
                                            iconName="arrow-next"
                                            size={24}
                                        />
                                    </IconButton>
                                )}
                            </Fragment>
                        ) : (
                            false
                        )}
                    </nav>
                ) : (
                    false
                )}
            </div>
        );
    }
}

SlideView.propTypes = {
    id: PropTypes.string.isRequired,
    nav: PropTypes.oneOf(['arrows', 'dots']),
    swipeable: PropTypes.bool,
    backButton: PropTypes.bool,
    nextButton: PropTypes.bool,
    area: PropTypes.oneOf(['content', 'container']),
    step: PropTypes.number
};

SlideView.defaultProps = {
    swipeable: true,
    backButton: true,
    nextButton: true,
    area: 'content',
    step: 0
};

export default SlideView;
