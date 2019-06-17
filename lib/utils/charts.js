const charts = {
    getSeriesPointByKeyValue: (pSeries = {}, pValue = 0, pKey = 'y') => {
        let xMetaPoint = {};
        const xData = pSeries[0].data;

        for (let i = 0; i < xData.length; i++) {
            const xPoint = xData[i];
            if (xPoint[pKey] === pValue && xMetaPoint) {
                xMetaPoint = xData[i];
            }
        }

        return xMetaPoint;
    }
};

module.exports = charts;
