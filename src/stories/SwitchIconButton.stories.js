import React from 'react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import { SwitchIconButton } from '../components';
import { icons } from './options';

export default {
    title: 'SwitchIconButton',
    component: SwitchIconButton,
    decorators: [withKnobs]
};

export const Default = () => {
    return (
        <SwitchIconButton
            size={number('Tamanho', 16)}
            iconName={select('Ícone', icons, 'on_off')}
        />
    );
};
