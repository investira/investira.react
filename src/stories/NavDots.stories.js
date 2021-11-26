import React from 'react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { NavDots } from '../components';

export default {
    title: 'NavDots',
    component: NavDots,
    decorators: [withKnobs]
};

export const Default = () => {
    return <NavDots size={number('Tamanho', 5)} />;
};
