import React from 'react';
import { addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components';

export default {
    title: 'Button',
    component: Button
};

addParameters({
    docs: {
        inlineStories: true
    }
});

export const Default = () => <Button color={'primary'}> Button</Button>;
