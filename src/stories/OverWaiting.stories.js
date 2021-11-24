import React from 'react';
import {
    radios,
    select,
    boolean,
    number,
    text,
    withKnobs
} from '@storybook/addon-knobs';
import { OverWaiting } from '../components';
import { textColors, variants } from './options';

export default {
    title: 'OverWaiting',
    component: OverWaiting,
    decorators: [withKnobs]
};

export const Default = () => {
    return (
        <OverWaiting
            cancelable={boolean('Cancelável', true)}
            backgroundFlat={boolean('Fundo plano', false)}
            open={boolean('Esperando', true)}
            message={text('Mensagem de carregamento')}
            progressProps={{
                color: select(
                    'Cor do progresso',
                    [
                        'primary',
                        'secondary',
                        'success',
                        'info',
                        'warning',
                        'danger'
                    ],
                    'primary'
                ),
                value: number('Valor do progresso', 100),
                variant: radios(
                    'Variante',
                    ['determinate', 'indeterminate', 'query', 'buffer'],
                    'determinate'
                )
            }}
            typographyProps={{
                color: radios('Cor da mensagem', textColors, 'textSecondary'),
                variant: select('Tamanho da mensagem', variants, 'caption')
            }}
            min={number('Mínimo', 0)}
            max={number('Máximo', 100)}
        />
    );
};
