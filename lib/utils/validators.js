const validators = {
    /**
     * Verifica se há conexão com a internet.
     *
     * @constructor
     * @param {Function} pAction Ação a se executa se não houver conexão
     * @return {boolean}
     */
    isOnline: () => {
        let xConection = navigator.onLine ? true : false;
        return xConection;
    }
};

module.exports = validators;
