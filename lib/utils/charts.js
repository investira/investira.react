const d3scaleLinear = require('d3-scale').scaleLinear;
const dates = require('investira.sdk').dates;

const charts = {
    square: x => {
        return x * x;
    },
    scaleRadial: () => {
        let linear = d3scaleLinear();

        function scale(x) {
            return Math.sqrt(linear(x));
        }

        scale.domain = function(_) {
            return arguments.length
                ? (linear.domain(_), scale)
                : linear.domain();
        };

        scale.nice = function(count) {
            return linear.nice(count);
        };

        scale.range = function(_) {
            return arguments.length
                ? (linear.range(_.map(charts.square)), scale)
                : linear.range().map(Math.sqrt);
        };

        scale.ticks = linear.ticks;
        scale.tickFormat = linear.tickFormat;

        return scale;
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
    },
    /**
     *
     *
     * @param {Number} pPeriod Período
     * @param {Number} pFP Fator Período
     * @param {Number} pQtdSerie Quantidade de Series a ser criadas
     * @param {Boolean} pRnd Se os valores de "y" serão randomicos
     * @returns {Array} xSerie
     */
    createDataSerie: (pPeriod, pFP, pQtdSerie = 1, pRnd = false) => {
        const xPeriod = pPeriod;
        let xSeries = [];
        let xPrecision = 100;

        for (let xI = 0; xI < pQtdSerie; xI++) {
            let xSerie = { data: [] };
            let xSerieData = xSerie.data;

            for (let xJ = 0; xJ < xPeriod; xJ++) {
                let xPlusOrMinus = Math.random() < 0.5 ? -100 : 100;
                let xRndNum =
                    Math.floor(
                        Math.random() *
                            (xPlusOrMinus * xPrecision - 1 * xPrecision) +
                            1 * xPrecision
                    ) /
                    (1 * xPrecision);
                let xPoint = pRnd ? new Point(xJ, xRndNum) : new Point(xJ, pFP);
                xSerieData.push(xPoint);
            }
            xSeries.push(xSerie);
        }

        return xSeries;
    }
};

/**
 *
 * Objeto que representa um ponto no gráfico
 * @param {Int} pIndex Index do Array
 * @param {Int} pFP Fator Periodo
 * @param {Int} pValue
 */

function Point(pIndex, pFP) {
    let xValueY = Number(parseFloat(pIndex * pFP).toPrecision(12));

    let xDataNow = dates.toDate();
    let xStrUTC = dates.addYears(xDataNow, pIndex).toUTC;

    this.x = pIndex;
    this.y = xValueY;
    this.metadata = {
        data: xStrUTC,
        valor: xValueY
    };
}

module.exports = charts;
