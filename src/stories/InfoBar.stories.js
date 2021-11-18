import React from 'react';
import { InfoBar } from '../components';
import {
    withKnobs,
    text,
    radios,
    number,
    select
} from '@storybook/addon-knobs';
import { variants, textColors, basicColors, barRange } from './options';

export default {
    title: 'InfoBar',
    parameters: {
        componentSubtitle:
            'Display de informação em forma de barra, utiliza a ProgressBar'
    },
    decorators: [withKnobs],
    component: InfoBar
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
            <InfoBar
                variant={select(
                    'Tamanho da fonte da label',
                    variants,
                    'caption'
                )}
                captionColor={radios(
                    'Cor do caption',
                    textColors,
                    'textSecondary'
                )}
                labelColor={radios('Cor da label', textColors, 'textSecondary')}
                variantValue={'body1'}
                valueColor={radios('Cor da barra', basicColors, 'primary')}
                value={number('Valor', 100, barRange)}
                label={text('Label', 'Label')}
                caption={text('Caption', 'Caption')}
                animate={radios(
                    'Animação',
                    ['progress', 'indeterminate'],
                    'progress'
                )}
            />
        </div>
    );
};
