import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { MaskedTextField } from '../components';

export default {
    title: 'MaskedTextField',
    component: MaskedTextField,
    decorators: [withKnobs]
};

export const Default = () => {
    return <MaskedTextField />;
};
