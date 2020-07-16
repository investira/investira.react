import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { validators } from 'investira.sdk';

import { Scroller } from '../';
import { Loading, CenterInView } from '../template';

import Style from './InfiniteScroller.module.scss';

class InfiniteScroller extends Component {
    constructor(props) {
        super(props);

        this.scroller = React.createRef();
        this.endListRef = React.createRef();
        this.startListRef = React.createRef();

        this.target = null;
        this.observer = null;

        this.tempScrollHeight = 0;
    }

    //TODO: Alterar pela do sdk quando for publicado
    queryParamsToObject = pQuerystring => {
        const xQueryParams = pQuerystring.split('?')[1].split('&');
        let xParams = {};

        xQueryParams.forEach(pParam => {
            const xParam = pParam.split('=');
            xParams[xParam[0]] = xParam[1];
        });

        return xParams;
    };

    handleNextPage = pProps => {
        const { onNextPage, nextPage } = pProps;
        if (nextPage && onNextPage) {
            const xNextParams = this.queryParamsToObject(nextPage);
            onNextPage(xNextParams);
        }
    };

    handlePrevPage = pProps => {
        const { onPrevPage, prevPage } = pProps;
        const isPrevPageEmpty = validators.isEmpty(prevPage);
        if (prevPage && !isPrevPageEmpty && onPrevPage) {
            const xPrevParams = this.queryParamsToObject(prevPage);
            onPrevPage(xPrevParams);
        } else if (isPrevPageEmpty) {
            onPrevPage();
        }
    };

    nextPageObserver = (pTarget, pScrollElem, pScrollerRect) => {
        if (pTarget) {
            const xOptions = {
                root: pScrollElem,
                rootMargin: `0px 0px ${pScrollerRect.height * 0.66}px 0px`,
                threshold: 0
            };

            this.observer = new IntersectionObserver((entries, observer) => {
                if (entries[0].isIntersecting) {
                    this.handleNextPage(this.props);
                }
            }, xOptions);

            this.observer.observe(pTarget);
        } else {
            console.info('Não há target');
        }
    };

    prevPageObserver = (pTarget, pScrollElem, pScrollerRect) => {
        if (pTarget) {
            const xOptions = {
                root: pScrollElem,
                rootMargin: `0px 0px 0px 0px`,
                //rootMargin: `${pScrollerRect.height * 0.66}px 0px 0px 0px`,
                threshold: 0
            };

            this.observer = new IntersectionObserver((entries, observer) => {
                if (entries[0].isIntersecting) {
                    this.handlePrevPage(this.props);
                }
            }, xOptions);

            this.observer.observe(pTarget);
        } else {
            console.info('Não há target');
        }
    };

    onMountScroll = () => {
        window.setTimeout(this.autoScroller, 300);
    };

    autoScroller = () => {
        if (this.scroller && this.scroller.current) {
            const xScroller = this.scroller.current.scrollRef.current;
            xScroller.scrollTo(0, xScroller.scrollHeight);
        } else {
            console.info('Componente Scroller não encontrado');
        }
    };

    rightScroll = () => {
        if (this.scroller.current.scrollRef.current.scrollHeight) {
            const xScroller = this.scroller.current.scrollRef.current;
            const xCurrentScrollHeight = xScroller.scrollHeight;
            const xDiffScrollHeight =
                xCurrentScrollHeight - this.tempScrollHeight;

            const xStartHeight = this.startListRef.current.getBoundingClientRect()
                .height;

            xScroller.scrollTo(0, xDiffScrollHeight - xStartHeight);
            this.tempScrollHeight = xCurrentScrollHeight;
        }
    };

    componentDidMount() {
        if (
            this.scroller &&
            this.scroller.current &&
            this.scroller.current.scrollRef &&
            this.scroller.current.scrollRef.current &&
            this.endListRef &&
            this.endListRef.current &&
            this.startListRef &&
            this.startListRef.current
        ) {
            const xScrollerElem = this.scroller.current.scrollRef.current;
            const xScrollerRect = this.scroller.current.scrollRef.current.getBoundingClientRect();

            if (!validators.isNull(this.props.onNextPage)) {
                this.target = this.endListRef.current;
                this.nextPageObserver(
                    this.target,
                    xScrollerElem,
                    xScrollerRect
                );
            }

            if (!validators.isNull(this.props.onPrevPage)) {
                this.onMountScroll();
                this.target = this.startListRef.current;
                this.prevPageObserver(
                    this.target,
                    xScrollerElem,
                    xScrollerRect
                );
            }
        }
    }

    componentDidUpdate() {
        if (
            validators.isNull(this.props.prevPage) &&
            !validators.isNull(this.props.onPrevPage)
        ) {
            this.onMountScroll();
        }

        if (
            !validators.isNull(this.props.onPrevPage) &&
            !validators.isNull(this.props.prevPage)
        ) {
            this.rightScroll();
        }
    }

    componentWillUnmount() {
        this.observer && this.observer.unobserve(this.target);
    }

    render() {
        const { children, nextPage, prevPage } = this.props;
        const xChild = React.Children.only(children);

        const xLoadingEndAreaClass = classNames(Style.loadingArea, {
            [Style.loadingHidden]: validators.isEmpty(nextPage)
        });
        const xLoadingStartAreaClass = classNames(Style.loadingArea, {
            [Style.loadingHidden]: validators.isEmpty(prevPage)
        });

        return (
            <Scroller ref={this.scroller}>
                <div
                    id={'startList'}
                    ref={this.startListRef}
                    className={xLoadingStartAreaClass}>
                    <CenterInView>
                        <Loading />
                    </CenterInView>
                </div>

                {React.cloneElement(xChild, {}, xChild)}

                <div
                    id={'endlist'}
                    ref={this.endListRef}
                    className={xLoadingEndAreaClass}>
                    <CenterInView>
                        <Loading />
                    </CenterInView>
                </div>
            </Scroller>
        );
    }
}

InfiniteScroller.propTypes = {
    children: PropTypes.element.isRequired,
    nextPage: PropTypes.string,
    onNextPage: PropTypes.func,
    prevPage: PropTypes.string,
    onPrevPage: PropTypes.func
};

export default InfiniteScroller;
