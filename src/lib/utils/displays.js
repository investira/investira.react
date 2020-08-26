import { validators } from 'investira.sdk';

const displays = {
    format: (pMask, pValue) => {
        //const xValue = pValue;
        for (let xI = 0; xI <= pValue.length; xI++) {
            pMask = pMask.replace('#', pValue.charAt(xI));
        }
        return pMask;
    },
    cnpj: pValue => {
        if (validators.isNull(pValue)) {
            return '';
        }
        return displays.format('##.###.###/####-##', pValue);
    },
    cpf: pValue => {
        if (validators.isNull(pValue)) {
            return '';
        }
        return displays.format('###.###.###-##', pValue);
    },
    cep: pValue => {
        if (validators.isNull(pValue)) {
            return '';
        }
        return displays.format('#####-###', pValue);
    },
    agencia: (pValue = '') => {
        let xValue = pValue;

        if (xValue.length < 4) {
            return xValue;
        }

        if (xValue.length > 6) {
            xValue = xValue.slice(0, 6);
        }

        const xMasks = { 4: '####', 5: '####-#', 6: '####-##' };
        return displays.format(xMasks[xValue.length], xValue) || '';
    },
    conta: pValue => {
        if (validators.isNull(pValue)) {
            return '';
        }

        if (pValue.length > 11 || pValue.length < 6) {
            console.error(
                'Conta deve ter no mínimo 6 dígitos e no máximo 11 dígitos'
            );
            return null;
        }

        const xMasks = {
            6: '#####-#',
            7: '######-#',
            8: '#######-#',
            9: '########-#',
            10: '#########-#',
            11: '###########-#'
        };

        return displays.format(xMasks[pValue.length], pValue) || '';
    },
    initialsLetters: (pStrings, pSize = 2) => {
        if (!pStrings) {
            return '';
        }

        const xSize = pSize <= 0 ? 0 : pSize - 1;
        const xArray = pStrings.split(' ');

        return Object.values(xArray)
            .map((xString, xIndex) => {
                if (xString !== null && xIndex <= xSize && xString !== 'null') {
                    return xString.charAt(0).toUpperCase();
                }
            })
            .join('');
    }
};

export default displays;
