import React from 'react';
import { radios, withKnobs } from '@storybook/addon-knobs';
import { Divisor } from '../components';

export default {
    title: 'Divisor',
    component: Divisor,
    decorators: [withKnobs]
};

export const Default = () => {
    return (
        <div style={{ height: '100px' }}>
            <Divisor
                direction={radios(
                    'Direção',
                    {
                        Vertical: 'vertical',
                        Horizontal: 'horizontal'
                    },
                    'horizontal'
                )}
            />
        </div>
    );
};
