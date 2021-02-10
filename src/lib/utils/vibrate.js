import browsers from './browsers';

const vibrate = {
    /**
     * Inicia a vibração.
     * @param {number | Array} pPattern
     */
    startVibrate: (pPattern = 1) => {
        browsers.isMobile() && window.navigator.vibrate(pPattern);
    },
    /**
     * Parar a vibração.
     */
    stopVibrate: () => {
        browsers.isMobile() && window.navigator.vibrate(0);
    }
};

export default vibrate;
