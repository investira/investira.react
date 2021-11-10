import React from 'react';
import { InfoBool } from '../components';
import {
    withKnobs,
    select,
    radios,
    boolean,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'InfoBool',
    parameters: {
        componentSubtitle: 'Display de informações de apenas dois estados'
    },
    decorators: [withKnobs],
    component: InfoBool
};

export const Default = () => {
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
        <InfoBool
            value={boolean('Valor', false)}
            label={text('Label', 'Label')}
            gutter={boolean('Margem', false)}
            labelColor={radios('Cor da label', optionsColor, 'textSecondary')}
            variant={select(
                'Tamanho da fonte da label',
                optionsVariant,
                'caption'
            )}
        />
    );
};
