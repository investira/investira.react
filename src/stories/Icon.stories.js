import React from 'react';
import { addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Icon } from '../components';

export default {
    title: 'Icon',
    component: Icon
};

addParameters({
    docs: {
        inlineStories: false
    }
});

export const Default = () => (
    <Icon iconName={'ok'} size={'21'} color={'primary'} />
);
