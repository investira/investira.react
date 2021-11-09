import React from 'react';
import { Typography } from '../components';
import {
    select,
    text,
    withKnobs,
    boolean,
    radios
} from '@storybook/addon-knobs';

export default {
    title: 'Typography',
    parameters: {
        componentSubtitle: 'Tipografia e fonte'
    },
    decorators: [withKnobs],
    component: Typography
};

export const Default = args => {
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
        h1: 'h1',
        inherit: 'inherit',
        overline: 'overline',
        subtitle1: 'subtitle1',
        subtitle2: 'subtitle2'
    };

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
            variant={select('Tamanho', optionsVariant, 'body1')}
            {...args}>
            {text('Texto', 'Tipografia')}
        </Typography>
    );
};
