import React, { Component } from 'react';
//import { getEpicenterLeftTop } from '../../../utils/_render';
import { renders } from '../../lib';
import Basic from '../Basic';

import Style from './ContainerFeedback.module.scss';

class ContainerFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackClick: false,
            feedbackFocus: false,
            feedbackRuning: false,
            epicenter: {
                left: 0,
                top: 0,
                radius: 0
            }
        };
        this.handleFeedbackClick = this.handleFeedbackClick.bind(this);
    }

    handleFeedbackClick(e) {
        let xEpicenter = this.state.epicenter;
        if (this.state.feedbackClick) {
            xEpicenter = this.state.epicenter;
        } else {
            xEpicenter = renders.getEpicenterLeftTop(e, this.props.centralized);
        }

        this.setState(prevState => {
            return {
                ...this.state,
                feedbackClick: !prevState.feedbackClick,
                epicenter: xEpicenter
            };
        });
    }

    render() {
        return (
            <>
                <Basic className={Style.root}>{this.props.children}</Basic>
                <span
                    className={Style.container}
                    onMouseDown={this.handleFeedbackClick}
                    style={this.props.centralized ? { overflow: 'unset' } : {}}>
                    {this.state.feedbackClick && (
                        <span
                            className={Style.animation}
                            style={{
                                left: this.state.epicenter.left,
                                top: this.state.epicenter.top,
                                width: this.state.epicenter.radius,
                                height: this.state.epicenter.radius
                            }}
                            onAnimationEnd={this.handleFeedbackClick}>
                            <span className={Style.animation_background} />
                        </span>
                    )}
                </span>
            </>
        );
    }
}

export default ContainerFeedback;
