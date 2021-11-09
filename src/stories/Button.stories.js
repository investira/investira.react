import React from 'react';
import {
    withKnobs,
    select,
    radios,
    boolean,
    text
} from '@storybook/addon-knobs';
import { Button } from '../components';

export default {
    title: 'Button',
    decorator: [withKnobs],
    component: Button
};

export const Default = () => {
    const optionsColor = {
        inherit: 'inherit',
        primary: 'primary',
        secondary: 'secondary',
        success: 'success',
        error: 'error',
        info: 'info',
        warning: 'warning'
    };

    const optionsSize = {
        small: 'small',
        medium: 'medium',
        large: 'large'
    };

    const optionsVariant = {
        contained: 'contained',
        outlined: 'outlined',
        text: 'text'
    };

    return (
        <Button
            disabled={boolean('Disabled', false)}
            disableElevation={boolean('disableElevation', false)}
            disableFocusRipple={boolean('disableFocusRipple', false)}
            disableRipple={boolean('disableRipple', false)}
            fullWidth={boolean('fullWidth', false)}
            variant={radios('Tipo', optionsVariant, 'text')}
            size={radios('Tamanho', optionsSize, 'medium')}
            color={select('Cor', optionsColor, 'primary')}>
            {text('Label', 'Botão')}
        </Button>
    );
};
