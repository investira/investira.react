import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { PasswordField } from '../components';

export default {
    title: 'PasswordField',
    component: PasswordField,
    decorators: [withKnobs]
};

export const Default = () => {
    return (
        <div
            style={{
                backgroundColor: '#191b2a',
                padding: '16px',
                width: '239px',
                borderRadius: '10px'
            }}>
            <PasswordField />
        </div>
    );
};
