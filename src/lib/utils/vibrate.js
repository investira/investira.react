const vibrate = {
    /**
     * Inicia a vibração.
     * @param {number | Array} pPattern
     */
    startVibrate: pPattern => {
        window.navigator.vibrate(pPattern);
    },
    /**
     * Parar a vibração.
     */
    stopVibrate: () => {
        window.navigator.vibrate(0);
    }
};

export default vibrate;
