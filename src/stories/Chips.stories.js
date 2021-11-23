import React from 'react';
import {
    boolean,
    radios,
    withKnobs,
    text,
    select,
    number
} from '@storybook/addon-knobs';
import { Chips, Icon } from '../components';
import { icons, iconColors } from './options';

export default {
    title: 'Chips',
    component: Chips,
    decorators: [withKnobs]
};

const generateData = (size = 6) => {
    let xData = [];

    for (let xI = 0; xI <= size; xI++) {
        xData.push({
            label: `CHIP ${xI}`,
            icon: (
                <Icon
                    color={select('Cor do ícone', iconColors, 'secondary')}
                    iconName={select('Ícone', icons, 'ok')}
                    size={number('Tamanho do ícone', 21)}
                />
            )
        });
    }
    return xData;
};

export const Default = () => {
    return (
        <div
            style={{
                backgroundColor: '#191b2a',
                padding: '16px',
                borderRadius: '10px',
                width: '300px'
            }}>
            <Chips
                label={text('Label', 'Chips')}
                keepFocus={boolean('keepFocus', false)}
                data={generateData()}
                variant={radios('Tipo', ['default', 'outlined'], 'outlined')}
            />
        </div>
    );
};
