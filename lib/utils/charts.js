const d3scaleLinear = require('d3-scale').scaleLinear;

const charts = {
    square: x => {
        return x * x;
    },
    scaleLinear: (pDomainMin, pDomainMax, pRangeMin, pRangeMax) => {
        const xDomain = [pDomainMin, pDomainMax];
        const xRange = [pRangeMin, pRangeMax];
        const xLinear = d3scaleLinear()
            .domain(xDomain)
            .range(xRange);

        return xLinear;
    },
    getFirstPoint: pSerie => {
        return pSerie[0];
    },
    getLastPoint: pSerie => {
        return pSerie[pSerie.length - 1];
    },
    getFirstAndLastPoints: pSerie => {
        let pPoints = [];
        pPoints.push(charts.getFirstPoint(pSerie), charts.getLastPoint(pSerie));
        return pPoints;
    },
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
