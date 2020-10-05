import React from 'react';
import PropTypes from 'prop-types';
import Style from './Success.module.scss';
function Success(props) {
    return (
        <div className={Style.root}>
            <div
                className={Style.circle}
                style={{
                    width: props.width ? `${props.width}px` : null,
                    height: props.height ? `${props.height}px` : null
                }}>
                <svg
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    width={props.width ? `${props.width}px` : null}
                    height={props.height ? `${props.height}px` : null}
                    viewBox="0 0 512 512"
                    className={props.startAnimation ? Style.start : undefined}>
                    <path
                        className={Style.circle}
                        d="M22.49999999999997,255.2A234.4,234.4 0,1,1 491.29999999999995,255.2A234.4,234.4 0,1,1 22.49999999999997,255.2"></path>
                    <path
                        className={Style.ok}
                        d="M154.7,256.7L224.6,328.7L357.3,183.3"></path>
                </svg>
            </div>
        </div>
    );
}

Success.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    startAnimation: PropTypes.bool
};

export default Success;
