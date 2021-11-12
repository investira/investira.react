import React from 'react';
import { Rate } from '../components';
import { withKnobs, number, text } from '@storybook/addon-knobs';

export default {
    title: 'Rate',
    parameters: {
        componentSubtitle:
            'Display de informação crescente, decrescente ou persistente'
    },
    decorators: [withKnobs],
    component: Rate
};

export const Default = () => {
    return (
        <Rate
            value={number('Valor')}
            size={number('Tamanho')}
            contrastColor={text('Cor de contraste (CSS)')}
        />
    );
};
