import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View from '../View';
import Style from './Deck.module.scss';

export class Deck extends Component {
    viewState(pId) {
        let classname = Style.view;

        if (this.isPrev(this.props.prevView, pId)) {
            classname += ` ${Style.viewPrev} `;
        }

        if (this.isActive(this.props.activeView, pId)) {
            classname += ` ${Style.viewActive} `;
        }

        if (
            !this.isActive(this.props.activeView, pId) &&
            !this.isPrev(this.props.prevView, pId)
        ) {
            classname += ` ${Style.viewOffset} `;
        }

        return classname;
    }

    isActive(activeView, id) {
        if (activeView === id) {
            return true;
        }
        return false;
    }

    isPrev(prevView, id) {
        if (prevView.includes(id)) {
            return true;
        }
        return false;
    }

    mapChildrens(arr) {
        let elements = arr.map((child, i) => {
            if (child !== false) {
                return (
                    <View
                        key={i}
                        id={`deck-${child.props.id}`}
                        className={this.viewState(child.props.id)}
                        style={
                            this.props.activeView === child.props.id
                                ? { zIndex: 1101 + i }
                                : { zIndex: 1100 }
                        }>
                        {child}
                    </View>
                );
            }
            return false;
        });

        return elements;
    }

    render() {
        const { children, id } = this.props;
        return (
            <div id={`deck-${id}`} className={Style.deck}>
                <div id={`deck-${id}__warp`} className={Style.warp}>
                    {children.constructor === Array
                        ? this.mapChildrens(children)
                        : this.props.children}
                </div>
            </div>
        );
    }
}

Deck.propTypes = {
    id: PropTypes.string.isRequired,
    prevView: PropTypes.array,
    activeView: PropTypes.string.isRequired
};

Deck.defaultProps = {
    prevView: []
};

export default Deck;
