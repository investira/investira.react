import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { ContainerList } from '../components';
import { List } from '../components/wrapper-material-ui';

export default {
    title: 'ContainerList',
    component: ContainerList,
    decorators: [withKnobs]
};

export const Default = () => {
    return (
        <ContainerList sticky={boolean('Sticky', false)}>
            <List>
                <div> Elemento 1</div> <div> Elemento 2</div>{' '}
                <div> Elemento 3</div>
            </List>
        </ContainerList>
    );
};
