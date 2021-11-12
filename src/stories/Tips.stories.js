import React from 'react';
import { Tips } from '../components';
import { select, withKnobs, text, number } from '@storybook/addon-knobs';
import { icons, variants, basicColors } from './options';

export default {
    title: 'Tips',
    decorators: [withKnobs],
    component: Tips
};

export const Default = () => {
    return (
        <Tips
            color={select('Cor', basicColors, 'primary')}
            size={number('Tamanho do ícone', 16)}
            iconName={select('Ícone', icons, 'lamp')}
            desc={text('Descrição', 'Insira uma descrição')}
        />
    );
};
