import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { validators } from 'investira.sdk';
import { capitalize } from '../utils/helpers';
import Style from './Icon.module.scss';

class Icon extends PureComponent {
    constructor(props) {
        super(props);
        this.xGradientTypes = {
            greenLight: ['#0ae1a3', '#0bbbd0'],
            orangeLight: ['#F38A1D', '#FC602D']
        };
    }

    isValidSize = pSize => {
        if (validators.isNumber(pSize)) {
            return `${pSize}px`;
        } else {
            return '24px';
        }
    };

    isGradient = pColorProp => {
        return !validators.isEmpty(this.xGradientTypes[pColorProp]);
    };

    getColorFromGradient = pColorProp => {
        if (this.isGradient(pColorProp)) {
            let i = 0;
            for (const color of this.xGradientTypes[pColorProp]) {
                if (i > 0) {
                    this.secondColor = <stop offset={i} stopColor={color} />;
                } else {
                    this.firstColor = <stop offset={i} stopColor={color} />;
                }
                i++;
            }
        }
    };

    render() {
        if (validators.isEmpty(this.props.iconName)) {
            return null;
        }
        const xColors = this.getColorFromGradient(this.props.color);
        const xIconName = '-i_' + this.props.iconName;
        const xClass = classNames(Style.root, xIconName, this.props.className, {
            [Style[`color${capitalize(this.props.color)}`]]:
                this.props.color !== 'currentcolor' ||
                this.props.color !== 'orangeLight' ||
                this.props.color !== 'greenLight'
        });
        return this.isGradient(this.props.color) ? (
            <svg
                width={this.isValidSize(this.props.size)}
                height={this.isValidSize(this.props.size)}
                className={xClass}
                style={this.props.style}
                viewBox={'0 0 24 24'}>
                <defs>
                    <linearGradient
                        id="icon-component-gradient"
                        x2="1"
                        y2="1"
                        gradientUnits="objectBoundingBox">
                        {this.firstColor}
                        {this.secondColor}
                    </linearGradient>
                </defs>
                <use href={`#${xIconName}`} xlinkHref={`#${xIconName}`} />
            </svg>
        ) : (
            <svg
                width={this.isValidSize(this.props.size)}
                height={this.isValidSize(this.props.size)}
                className={xClass}
                style={this.props.style}
                viewBox={'0 0 24 24'}>
                <use href={`#${xIconName}`} xlinkHref={`#${xIconName}`} />
            </svg>
        );
    }
}

Icon.propTypes = {
    size: PropTypes.number,
    iconName: PropTypes.string,
    className: PropTypes.string,
    classes: PropTypes.object,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

Icon.defaultProps = {
    color: 'default',
    size: 24
};

export default Icon;
