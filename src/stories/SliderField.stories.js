import React from 'react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { SliderField } from '../components';

export default {
    title: 'SliderField',
    component: SliderField,
    decorators: [withKnobs]
};

export const Default = () => {
    return (
        <div
            style={{
                backgroundColor: '#191b2a',
                padding: '16px',
                borderRadius: '10px'
            }}>
            <SliderField
                required={boolean('Required', false)}
                disabled={boolean('Disabled', false)}
                name={'slider'}
                step={number('Intervalo', 1)}
                readOnly={boolean('ReadOnly', false)}
                value={number('Valor', 0)}
                max={number('Máximo', 1000)}
                maxlength={number('Comprimento máximo', 13)}
                label={text('Label', 'Label')}
            />
        </div>
    );
};
