import React from 'react';
import { addParameters } from '@storybook/react';
import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text } from '@storybook/addon-knobs/react';
//import { withInfo } from '@storybook/addon-info';
import { HorizontalList } from '../components';

export default {
    title: 'HorizontalList',
    parameters: {
        componentSubtitle:
            'Lista horizontal com centralização do elemento selecionado'
    },
    component: HorizontalList,
    //decorators: [withKnobs, withInfo]
    decorators: [withKnobs]
};

addParameters({
    docs: {
        inlineStories: false
    }
});

const Item = props => (
    <div
        style={{ backgroundColor: props.backgroundColor }}
        onClick={props.onClick}>
        Hello {props.data.text}
    </div>
);

const Wrapper = props => (
    <div style={{ maxWidth: '280px' }}>{props.children}</div>
);

const generateData = (size = 6) => {
    let xData = [];

    for (let xI = 0; xI <= size; xI++) {
        xData.push({ text: xI });
    }
    return xData;
};

export const Default = () => (
    <HorizontalList
        id={'horizontalList'}
        onClick={action('clicked')}
        child={Item}
        childProps={{ backgroundColor: 'yellow' }}
        data={generateData()}
    />
);
