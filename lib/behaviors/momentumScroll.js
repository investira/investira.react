const { lerp } = require('investira.sdk').numbers;

const momentumScroll = (pElement, pOptions = { speed: 5, directions: 3 }) => {
    let xControl = Object.assign({}, { options: pOptions });

    pElement.addEventListener('touchstart', e => {
        startScroll(e);
        e.preventDefault();
        return false;
    });

    pElement.addEventListener('touchmove', e => {
        doScrollMove(e);
        e.preventDefault();
        return false;
    });

    pElement.addEventListener('touchend', e => {
        console.log('touchend');
        endScroll(e);
        e.preventDefault();
        return false;
    });
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
        xControl.deltaY = xControl.clientY - e.touches[0].clientY;
        xControl.deltaMomTargetY = 0;
        xControl.speedY = xControl.deltaY / (Date.now() - xControl.startTime);
        let xMaxScrollTop = pElement.scrollHeight - pElement.clientHeight;
        let xNewScrollTop = pElement.scrollTop + xControl.deltaY;
        if (xNewScrollTop < 0) {
            xControl.deltaY = -pElement.scrollTop;
        } else if (xNewScrollTop > xMaxScrollTop) {
            xControl.deltaY = -(pElement.scrollTop - xMaxScrollTop);
        } else {
            xControl.deltaMomTargetY =
                pElement.scrollHeight *
                xControl.speedY *
                xControl.options.speed;
            xNewScrollTop =
                pElement.scrollTop + xControl.deltaY + xControl.deltaMomTargetY;
            if (xNewScrollTop < 0) {
                xControl.deltaMomTargetY = -(
                    pElement.scrollTop - xControl.deltaY
                );
            } else if (xNewScrollTop > xMaxScrollTop) {
                xControl.deltaMomTargetY =
                    xMaxScrollTop - pElement.scrollTop - xControl.deltaY;
            }
        }
        pElement.scrollTop += xControl.deltaY;
        saveLastPosition(e.touches[0]);
    };

    const startScrollMomentum = () => {
        const xDeltaMomY = lerp(
            xControl.deltaMomY,
            xControl.deltaMomTargetY,
            0.04
        );
        pElement.scrollTop += xDeltaMomY - xControl.deltaMomY;
        xControl.deltaMomY = xDeltaMomY;
        if (
            Math.round(xControl.deltaMomTargetY) !=
            Math.round(xControl.deltaMomY)
        ) {
            xControl.af = window.requestAnimationFrame(startScrollMomentum);
        } else {
            resetControl();
        }
    };
    const stopScrollMomentum = () => {
        cancelAnimationFrame(xControl.af);
    };

    const resetControl = () => {
        stopScrollMomentum();

        xControl.af = null;
        xControl.startTime = 0;
        xControl.deltaMomTargetX = 0;
        xControl.deltaMomTargetY = 0;
        xControl.clientX = 0;
        xControl.clientY = 0;
        xControl.deltaX = 0;
        xControl.deltaY = 0;
        xControl.deltaMomX = 0;
        xControl.deltaMomY = 0;
        xControl.speedX = 0;
        xControl.speedY = 0;
    };

    const saveLastPosition = e => {
        xControl.clientX = e.clientX;
        xControl.clientY = e.clientY;
    };

    resetControl();
};

module.exports = momentumScroll;
