import React from 'react';
import { withKnobs, date, select } from '@storybook/addon-knobs';
import { IconDatePicker } from '../components';
import { basicColors } from './options';

export default {
    title: 'IconDatePicker',
    component: IconDatePicker,
    decorators: [withKnobs]
};

export const Default = () => {
    return (
        <div
            style={{
                backgroundColor: '#191b2a',
                padding: '16px',
                borderRadius: '10px',
                width: '50px'
            }}>
            <IconDatePicker value={date('Data')} />
        </div>
    );
};
