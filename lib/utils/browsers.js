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
    }
};

module.exports = browsers;
