import React from 'react';
import classNames from 'classnames';
import { objects } from 'investira.sdk';

const renders = {
    /**
     * Retorna class sem espaços extras
     *
     * @constructor
     * @param {object} pSource Elemento origem
     * @return {object} Copia do elemento
     */
    resolvePropSize(props) {
        const xSizes = ['sm', 'lg'];
        let xClass = classNames({
            [`-${props.size}`]: xSizes.includes(props.size)
        });
        // console.log('props.size:\t' + xClass);
        return xClass;
    },

    resolvePropBlock(props) {
        const xClass = classNames({
            [`-block`]: props.block
        });
        return xClass;
    },

    getTimeFromTextLength(pTextLegth = 0) {
        if (pTextLegth === 0) {
            return 0;
        }
        return (pTextLegth / 2) * 200 + 1000;
    },

    /**
     * Copia um elemento para outro.
     *
     * @constructor
     * @param {object} pSource Elemento origem
     * @return {object} Copia do elemento
     */
    setId(component, props) {
        if (objects.getNotEmpty(props.id)) {
            return props.id;
        } else {
            return null;
        }
    },
    childrenWithProps(props) {
        return React.Children.map(props.children, child =>
            React.cloneElement(child, { ...props })
        );
    },
    getEpicenterLeftTop(e, pCentralized) {
        let xEpicenter = getEpicenter(e, pCentralized);
        return {
            left: -(xEpicenter.radius / 2) + xEpicenter.x,
            top: -(xEpicenter.radius / 2) + xEpicenter.y,
            radius: xEpicenter.radius
        };
    },
    getEpicenter(e, pCentralized) {
        let xEpicenter = {
            x: 0,
            y: 0,
            radius: 0
        };

        if (e.type === 'touchstart') {
            this.ignoringMouseDown = true;
        }
        const element = e.currentTarget;
        const rect = element
            ? element.getBoundingClientRect()
            : {
                  width: 0,
                  height: 0,
                  left: 0,
                  top: 0
              };

        if (
            pCentralized ||
            (e.clientX === 0 && e.clientY === 0) ||
            (!e.clientX && !e.touches)
        ) {
            xEpicenter.x = Math.round(rect.width / 2);
            xEpicenter.y = Math.round(rect.height / 2);
        } else {
            const clientX = e.clientX ? e.clientX : e.touches[0].clientX;
            const clientY = e.clientY ? e.clientY : e.touches[0].clientY;
            xEpicenter.x = Math.round(clientX - rect.left);
            xEpicenter.y = Math.round(clientY - rect.top);
        }

        const xEpicenterX =
            Math.max(
                Math.abs((element ? element.clientWidth : 0) - xEpicenter.x),
                xEpicenter.x
            ) *
                2 +
            2;
        const xEpicenterY =
            Math.max(
                Math.abs((element ? element.clientHeight : 0) - xEpicenter.y),
                xEpicenter.y
            ) *
                2 +
            2;
        xEpicenter.radius = Math.sqrt(xEpicenterX ** 2 + xEpicenterY ** 2);

        return xEpicenter;
    }
};

module.exports = renders;
