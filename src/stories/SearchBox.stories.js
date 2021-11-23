import React from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { SearchBox } from '../components';

export default {
    title: 'SearchBox',
    component: SearchBox,
    decorators: [withKnobs]
};

export const Default = () => {
    return (
        <div
            style={{
                backgroundColor: '#191b2a',
                padding: '16px',
                borderRadius: '10px'
            }}>
            <SearchBox
                filter={boolean('Filtro', false)}
                placeholder={text('Placeholder', 'Pesquise aqui')}
            />
        </div>
    );
};
