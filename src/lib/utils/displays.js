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
    agencia: pValue => {
        if (validators.isNull(pValue)) {
            return '';
        }
        if (pValue.length < 4 || pValue.length > 6) {
            console.error(
                'Agência deve ter no mínimo 4 dígitos e no máximo 6 dígitos'
            );
            return null;
        }

        const xMasks = { 4: '####', 5: '####-#', 6: '####-##' };
        return displays.format(xMasks[pValue.length], pValue) || '';
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
    initialsLetters: pStrings => {
        if (!pStrings) {
            return '';
        }

        const xArray = pStrings.split(' ');

        return Object.values(xArray)
            .map((xItem, xIndex) => {
                if (xItem !== null && xIndex <= 1) {
                    return xItem.charAt(0).toUpperCase();
                }
            })
            .join('');
    }
};

export default displays;
