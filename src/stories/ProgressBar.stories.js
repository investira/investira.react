import React from 'react';
import { ProgressBar } from '../components';
import { withKnobs, number, radios } from '@storybook/addon-knobs';
import { barRange, basicColors } from './options';

export default {
    title: 'ProgressBar',
    parameters: {
        componentSubtitle: 'ProgressBar'
    },
    decorators: [withKnobs],
    component: ProgressBar
};

export const Default = () => {
    return (
        <ProgressBar
            value={number('Valor', 100, barRange)}
            color={radios('Cor', basicColors)}
            animate={radios('Animação', {
                Indeterminada: 'indeterminate',
                Progresso: 'progress'
            })}
        />
    );
};
