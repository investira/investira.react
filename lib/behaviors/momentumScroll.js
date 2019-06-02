const { lerp } = require('investira.sdk').numbers;

const momentumScroll = (pElement, pOptions) => {
    let xControl = Object.assign(
        {},
        { options: { speed: 2, duration: 2, directions: 3, ...pOptions } }
    );

    pElement.style.webkitOverflowScrolling = 'auto';
    pElement.style.overflowX =
        (xControl.options.directions & 1) == 1 ? 'scroll' : 'hidden';
    pElement.style.overflowY =
        (xControl.options.directions & 2) == 2 ? 'scroll' : 'hidden';
    xControl.options.speed = Math.max(Math.min(xControl.options.speed, 4), 0);
    xControl.options.duration =
        ((5 - Math.max(Math.min(xControl.options.duration, 4), 0)) * 2) / 100;
    xControl.options.bounce = Math.max(Math.min(xControl.options.bounce, 4), 0);

    const startScroll = e => {
        resetControl();
        saveLastPosition(e.touches[0]);
        xControl.startTime = Date.now();
    };

    const endScroll = e => {
        saveLastPosition(e.changedTouches[0]);
        startScrollMomentum();
    };

    const doScrollMove = e => {
        stopScrollMomentum();
        pElement.scrollTop = calcDirections(
            xControl.y,
            e.touches[0].clientY,
            pElement.scrollTop,
            pElement.scrollHeight,
            pElement.clientHeight
        );
        saveLastPosition(e.touches[0]);
    };

    const calcDirections = (
        pAxis,
        pClient,
        pScroll,
        pScrollSize,
        pClientSize
    ) => {
        let xScroll = 0;
        let xDelta = pAxis.client - pClient;
        let xMaxScroll = pScrollSize - pClientSize;
        let xNewScroll = pScroll + xDelta;
        pAxis.scrollMomentum = 0;
        pAxis.speed = xDelta / (Date.now() - xControl.startTime);
        if (xNewScroll < 0) {
            xDelta = -pScroll;
        } else if (xNewScroll > xMaxScroll) {
            xDelta = -(pScroll - xMaxScroll);
        } else {
            pAxis.scrollMomentum = pScrollSize * pAxis.speed;
            xNewScroll = pScroll + xDelta + pAxis.scrollMomentum;
            if (xNewScroll < 0) {
                pAxis.scrollMomentum = -(pScroll - xDelta);
            } else if (xNewScroll > xMaxScroll) {
                pAxis.scrollMomentum = xMaxScroll - pScroll - xDelta;
            }
            pAxis.scrollMomentum = Math.round(
                pAxis.scrollMomentum * xControl.options.speed
            );
        }
        xScroll = pScroll + xDelta;
        pAxis.scrollMomentum += xScroll;

        return xScroll;
    };

    const startScrollMomentum = () => {
        if (
            pElement.scrollTop == 0 ||
            pElement.scrollTop ==
                pElement.scrollHeight - pElement.clientHeight ||
            Math.round(xControl.y.scrollMomentum) ==
                Math.round(pElement.scrollTop)
        ) {
            resetControl();
        } else {
            console.log(pElement.scrollTop, xControl.y.scrollMomentum);
            const xDeltaMomY = lerp(
                pElement.scrollTop,
                xControl.y.scrollMomentum,
                xControl.options.duration
            );
            pElement.scrollTop = xDeltaMomY;
            xControl.af = window.requestAnimationFrame(startScrollMomentum);
        }
    };

    const stopScrollMomentum = () => {
        cancelAnimationFrame(xControl.af);
    };

    const resetControl = () => {
        stopScrollMomentum();
        const xAxis = {
            speed: 0,
            client: 0,
            deltaMom: 0,
            scrollMomentum: 0
        };
        xControl = Object.assign(xControl, {
            af: 0,
            startTime: 0,
            x: Object.assign(xAxis),
            y: Object.assign(xAxis)
        });
    };

    const saveLastPosition = e => {
        xControl.x.client = e.clientX;
        xControl.y.client = e.clientY;
    };

    const onTouchStart = e => {
        startScroll(e);
        e.preventDefault();
        e.stopPropagation();
    };
    const onTouchMove = e => {
        doScrollMove(e);
        e.preventDefault();
        e.stopPropagation();
    };
    const onTouchEnd = e => {
        endScroll(e);
        e.preventDefault();
        e.stopPropagation();
    };

    const mount = () => {
        resetControl();
        pElement.addEventListener('touchstart', onTouchStart);

        pElement.addEventListener('touchmove', onTouchMove);

        pElement.addEventListener('touchend', onTouchEnd);
    };
    const unmount = () => {
        pElement.removeEventListener('touchstart', onTouchStart);
        pElement.removeEventListener('touchmove', onTouchMove);
        pElement.removeEventListener('touchend', onTouchEnd);
        resetControl();
    };
    return { mount, unmount };
};

module.exports = momentumScroll;
