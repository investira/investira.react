import React from 'react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import { Icon } from '../components';
import { icons, iconColors } from './options';

export default {
    title: 'Icon',
    parameters: {
        componentSubtitle: 'Renderiza ícones em svg'
    },
    decorators: [withKnobs],
    component: Icon
};

export const Default = () => {
    return (
        <Icon
            iconName={select('Ícone', icons, 'investira_h')}
            size={number('Tamanho', 160)}
            color={select('Cor', iconColors, 'greenLight')}
        />
    );
};
