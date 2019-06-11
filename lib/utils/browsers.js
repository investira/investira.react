const browsers = {
    getBrowseVersion(pRegex, rGroup) {
        const xUserAgent = navigator.userAgent.match(pRegex);

        return xUserAgent ? xUserAgent[rGroup] : null;
    },
    /**
     * Retorna a versão do Chorme/Chormium.
     *
     * @constructor
     * @return {boolean}
     */
    getNavigatorVersion: () => {
        console.log(navigator.userAgent);
        //navigator.userAgent.match(/Chrom[e|ium]\/([0-9]+)\./)[2]

        let xUserAgent = {
            chrome: browsers.getBrowseVersion(/Chrom[e|ium]\/([0-9]+)\./, 1),
            firefox: browsers.getBrowseVersion(/Firefox\/([0-9]+)\./, 1),
            //edge: null,
            safari: browsers.getBrowseVersion(/Safari\/([0-9]+)\./, 1)
        };
        console.log(xUserAgent);
        //return xAgentRaw ? parseInt(xAgentRaw[2], 10) : false;
        return false;
    },
    /**
     * Verifica se o navegador está no modo online ou offline.
     *
     * @return {boolean}
     */
    isOnline: () => {
        const xConection = navigator.onLine ? true : false;
        return xConection;
    },
    /**
     * Retorna se é IOS
     *
     * @returns {boolean}
     */
    isIOS: () => {
        const xNav = navigator.userAgent.toLowerCase();
        return (
            xNav.match(/iphone/i) || xNav.match(/ipod/i) || xNav.match(/ipad/i)
        );
    },

    /**
     * Retorna se é android
     *
     * @returns {boolean}
     */
    isAndroid: () => {
        const xNav = navigator.userAgent.toLowerCase();
        return xNav.match(/android/i);
    },

    /**
     * Retorna se é BlackBerry
     *
     * @returns {boolean}
     */
    isBlackBerry: () => {
        const xNav = navigator.userAgent.toLowerCase();
        return xNav.match(/blackberry/i) || xNav.match(/bb/i);
    },

    /**
     * Retorna se é equipamento móvel
     *
     * @returns {boolean}
     */
    isKindle: () => {
        const xNav = navigator.userAgent.toLowerCase();
        return xNav.match(/kindle/i) || xNav.match(/kf/i);
    },

    /**
     * Retorna se é equipamento móvel
     *
     * @returns {boolean}
     */
    isMobile: () => {
        return (
            browsers.isiOS() ||
            browsers.isBlackBerry() ||
            browsers.isKindle() ||
            browsers.isAndroid()
        );
    }
};

module.exports = browsers;
