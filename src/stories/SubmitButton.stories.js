import React from 'react';
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';
import { SubmitButton } from '../components';
import { buttons } from './options';

export default {
    title: 'SubmitButton',
    component: SubmitButton,
    decorators: [withKnobs]
};

export const Default = () => {
    return (
        <SubmitButton
            disabled={boolean('Desabilitado', false)}
            isSubmitting={boolean('Está submetendo?', false)}
            variant={radios('Tipo', buttons, 'outlined')}>
            {text('Label', 'Submeter')}
        </SubmitButton>
    );
};
