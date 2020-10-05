import React from 'react';
import PropTypes from 'prop-types';
import Style from './Error.module.scss';
function Error(props) {
    return (
        <div className={Style.root}>
            <div
                className={Style.circle}
                style={{
                    width: props.width ? `${props.width}px` : null,
                    height: props.height ? `${props.height}px` : null
                }}>
                <svg
                    id="Error_1"
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
                        className={Style.line}
                        //className="st1 cPKHNHna_1"
                        d="M185.5,183.3L327.2,325.1"></path>
                    <path
                        className={Style.line2}
                        //className="st1 cPKHNHna_2"
                        d="M185.5,325.1L327.2,183.3"></path>
                </svg>
            </div>
        </div>
    );
}

Error.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    startAnimation: PropTypes.bool
};

export default Error;
