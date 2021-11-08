import React from 'react';
import { Info } from '../components';
import {
    withKnobs,
    text,
    radios,
    boolean,
    select
} from '@storybook/addon-knobs';

export default {
    title: 'Info',
    parameters: {
        componentSubtitle:
            'Display de informações de label e valor com layout personalizável'
    },
    decorators: [withKnobs],
    component: Info
};

export const Default = args => {
    const optionsColor = {
        textPrimary: 'textPrimary',
        textSecondary: 'textSecondary'
    };
    const optionsVariant = {
        button: 'button',
        caption: 'caption',
        body1: 'body1',
        body2: 'body2',
        h6: 'h6',
        h5: 'h5',
        h4: 'h4',
        h3: 'h3',
        h2: 'h2',
        h1: 'h1'
    };
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
            variant={select(
                'Tamanho da fonte da label',
                optionsVariant,
                'caption'
            )}
            variantValue={select(
                'Tamanho da fonte do valor',
                optionsVariant,
                'caption'
            )}
            valueColor={radios('Cor do valor', optionsColor, 'textSecondary')}
            labelColor={radios('Cor da label', optionsColor, 'textSecondary')}
            value={text('Valor', 'Valor')}
            label={text('Legenda', 'Legenda')}
            {...args}
        />
    );
};
