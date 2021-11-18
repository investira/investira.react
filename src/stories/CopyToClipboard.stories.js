import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { CopyToClipboard } from '../components';

export default {
    title: 'CopyToClipboard',
    component: CopyToClipboard,
    decorators: [withKnobs]
};

export const Default = () => {
    return <CopyToClipboard value={text('Texto a copiar', 'Exemplo')} />;
};
