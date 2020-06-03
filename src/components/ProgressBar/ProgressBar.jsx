import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Style from './ProgressBar.module.scss';

function ProgressBar(props) {
    const xClass = classNames(Style.progressBarFill, props.className, {
        [Style.animate]: props.animate === 'indeterminate'
    });

    return (
        <>
            <div className={Style.progressBar}>
                <span
                    style={{
                        width: `${String(props.value)}%`,
                        backgroundColor: `var(--color-${props.color})`
                    }}
                    className={xClass}></span>
                <span
                    style={{
                        backgroundColor: `var(--color-${props.color})`
                    }}
                    className={xClass}></span>
            </div>
        </>
    );
}

ProgressBar.propTypes = {
    color: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    animate: PropTypes.oneOf(['indeterminate', 'progress'])
};

ProgressBar.defaultProps = {
    color: 'primary',
    value: 100,
    animate: 'progress'
};

export default ProgressBar;
