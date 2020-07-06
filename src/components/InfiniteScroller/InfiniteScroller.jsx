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

        this.target = null;
        this.observer = null;
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

    componentDidMount() {
        if (
            this.scroller &&
            this.scroller.current &&
            this.scroller.current.scrollRef &&
            this.scroller.current.scrollRef.current &&
            this.endListRef &&
            this.endListRef.current
        ) {
            const xScrollerElem = this.scroller.current.scrollRef.current;
            this.target = this.endListRef.current;

            const xScrollerRect = this.scroller.current.scrollRef.current.getBoundingClientRect();

            const xOptions = {
                root: xScrollerElem,
                rootMargin: `0px 0px ${xScrollerRect.height * 0.66}px 0px`,
                threshold: 0
            };

            this.observer = new IntersectionObserver((entries, observer) => {
                if (entries[0].isIntersecting) {
                    this.handleNextPage(this.props);
                }
            }, xOptions);

            this.observer.observe(this.target);
        }
    }

    componentWillUnmount() {
        this.observer.unobserve(this.target);
    }

    render() {
        const { children, nextPage } = this.props;
        const xChild = React.Children.only(children);

        const xLoadingAreaClass = classNames(Style.loadingArea, {
            [Style.loadingHidden]: validators.isEmpty(nextPage)
        });

        return (
            <Scroller ref={this.scroller}>
                {React.cloneElement(xChild, {}, xChild)}

                <div
                    id={'endlist'}
                    ref={this.endListRef}
                    className={xLoadingAreaClass}>
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
    onNextPage: PropTypes.func
};

export default InfiniteScroller;
