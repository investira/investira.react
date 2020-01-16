import React, { Component } from "react";
import PropTypes from "prop-types";
import { validators } from "investira.sdk";
import Style from "./Deck.module.scss";

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

  spreadChildren = pChildren => {
    const xNewChildren = [];

    for (const child of pChildren) {
      if (validators.isArray(child)) {
        xNewChildren.push(...child);
      } else {
        xNewChildren.push(child);
      }
    }

    return xNewChildren;
  };

  styleView = (pActiveView, pChildId, pIndex) => {
    const isActive = pActiveView === pChildId;
    return isActive ? { zIndex: 1101 + pIndex } : { zIndex: 1100 };
  };

  mapChildrens(pChildren) {
    const xChildrens = this.spreadChildren(pChildren);
    const xElements = xChildrens.map((xChild, xIndex) => {
      if (xChild !== false) {
        return (
          <div
            key={xIndex}
            id={`${xChild.props.id}`}
            className={this.viewState(xChild.props.id)}
            style={this.styleView(
              this.props.activeView,
              xChild.props.id,
              xIndex
            )}
          >
            {xChild}
          </div>
        );
      }
      return false;
    });

    return xElements;
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
  activeView: PropTypes.string
};

Deck.defaultProps = {
  prevView: []
};

export default Deck;
