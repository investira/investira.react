import React from 'react';
import { ProgressBar } from '../components';
import { withKnobs, number, radios } from '@storybook/addon-knobs';

export default {
    title: 'ProgressBar',
    parameters: {
        componentSubtitle: 'ProgressBar'
    },
    decorators: [withKnobs],
    component: ProgressBar
};

export const Default = () => {
    const optionsColor = {
        primary: 'primary',
        secondary: 'secondary',
        info: 'info',
        danger: 'danger',
        warning: 'warning'
    };
    const rangeValue = {
        range: true,
        min: 0,
        max: 100,
        step: 1
    };
    return (
        <ProgressBar
            value={number('Valor', 100, rangeValue)}
            color={radios('Cor', optionsColor)}
            animate={radios('Animação', {
                Indeterminada: 'indeterminate',
                Progresso: 'progress'
            })}
        />
    );
};
