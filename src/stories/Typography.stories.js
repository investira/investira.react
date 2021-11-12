import React from 'react';
import { Typography } from '../components';
import {
    select,
    text,
    withKnobs,
    boolean,
    radios
} from '@storybook/addon-knobs';
import { variants } from './options';

export default {
    title: 'Typography',
    parameters: {
        componentSubtitle: 'Tipografia e fonte'
    },
    decorators: [withKnobs],
    component: Typography
};

export const Default = () => {
    const optionsAlign = {
        inherit: 'inherit',
        center: 'center',
        justify: 'justify',
        left: 'left',
        right: 'right'
    };

    return (
        <Typography
            align={radios('Alinhamento', optionsAlign, 'inherit')}
            noWrap={boolean('noWrap', false)}
            paragraph={boolean('Parágrafo', false)}
            gutterBottom={boolean('gutterBottom', false)}
            variant={select('Tamanho', variants, 'body1')}>
            {text('Texto', 'Tipografia')}
        </Typography>
    );
};
