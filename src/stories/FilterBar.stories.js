import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { FilterBar } from '../components';
import { iconColors, icons } from './options';

export default {
    title: 'FilterBar',
    component: FilterBar,
    decorators: [withKnobs]
};

const generateData = (size = 6) => {
    let xData = [];

    for (let xI = 0; xI <= size; xI++) {
        xData.push({
            label: `FILTER ${xI}`,
            iconName: select('Ícone', icons, 'ok'),
            color: select('Cor do ícone selecionado', iconColors, 'primary'),
            default: select(
                'Cor do ícone não selecionado',
                iconColors,
                'secondary'
            )
        });
    }
    return xData;
};

export const Default = () => {
    return <FilterBar margin={boolean('Margem', true)} data={generateData()} />;
};
