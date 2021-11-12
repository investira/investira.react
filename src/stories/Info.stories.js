import React from 'react';
import { Info } from '../components';
import {
    withKnobs,
    text,
    radios,
    boolean,
    select
} from '@storybook/addon-knobs';
import { variants, textColors } from './options';

export default {
    title: 'Info',
    parameters: {
        componentSubtitle:
            'Display de informações de label e valor com layout personalizável'
    },
    decorators: [withKnobs],
    component: Info
};

export const Default = () => {
    return (
        <Info
            gutter={radios('Gutter', {
                left: 'left',
                full: 'full',
                right: 'right'
            })}
            gutterBottom={boolean('gutterBottom', false)}
            colon={boolean('Dois pontos', false)}
            bold={boolean('Valor em negrito', false)}
            direction={radios(
                'Direção',
                { vertical: 'vertical', horizontal: 'horizontal' },
                'vertical'
            )}
            variant={select('Tamanho da fonte da label', variants, 'caption')}
            variantValue={select(
                'Tamanho da fonte do valor',
                variants,
                'caption'
            )}
            valueColor={radios('Cor do valor', textColors, 'textSecondary')}
            labelColor={radios('Cor da label', textColors, 'textSecondary')}
            value={text('Valor', 'Valor')}
            label={text('Legenda', 'Legenda')}
        />
    );
};
