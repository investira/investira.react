const validators = {
    /**
     * Verifica se há conexão com a internet.
     *
     * @return {boolean}
     */
    isOnline: () => {
        let xConection = navigator.onLine ? true : false;
        return xConection;
    },

    /**
     * Retorna se é IOS
     *
     * @return {boolean}
     */
    isIOS: () => {}
};

module.exports = validators;
