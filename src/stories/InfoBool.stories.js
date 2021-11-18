import React from 'react';
import { InfoBool } from '../components';
import {
    withKnobs,
    select,
    radios,
    boolean,
    text
} from '@storybook/addon-knobs';
import { textColors, variants } from './options';

export default {
    title: 'InfoBool',
    parameters: {
        componentSubtitle: 'Display de informações de apenas dois estados'
    },
    decorators: [withKnobs],
    component: InfoBool
};

export const Default = () => {
    return (
        <div
            style={{
                backgroundColor: '#191b2a',
                padding: '16px',
                borderRadius: '10px',
                width: '300px'
            }}>
            <InfoBool
                value={boolean('Valor', false)}
                label={text('Label', 'Label')}
                gutter={boolean('Margem', false)}
                labelColor={radios('Cor da label', textColors, 'textSecondary')}
                variant={select(
                    'Tamanho da fonte da label',
                    variants,
                    'caption'
                )}
            />
        </div>
    );
};
