import React from 'react';
import { InfoBar } from '../components';
import {
    withKnobs,
    text,
    radios,
    number,
    select
} from '@storybook/addon-knobs';

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
    const valueColor = {
        primary: 'primary',
        secondary: 'secondary',
        info: 'info',
        danger: 'danger',
        warning: 'warning'
    };
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
    const rangeValue = {
        range: true,
        min: 0,
        max: 100,
        step: 1
    };
    return (
        <InfoBar
            variant={select(
                'Tamanho da fonte da label',
                optionsVariant,
                'caption'
            )}
            captionColor={radios(
                'Cor do caption',
                optionsColor,
                'textSecondary'
            )}
            labelColor={radios('Cor da label', optionsColor, 'textSecondary')}
            variantValue={'body1'}
            valueColor={radios('Cor da barra', valueColor, 'primary')}
            value={number('Valor', 100, rangeValue)}
            label={text('Label', 'Label')}
            caption={text('Caption', 'Caption')}
        />
    );
};
