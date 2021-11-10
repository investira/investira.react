import React from 'react';
import { FluidPaper } from '../components';
import {
    withKnobs,
    text,
    boolean,
    number,
    radios
} from '@storybook/addon-knobs';

export default {
    title: 'FluidPaper',
    parameters: {
        componentSubtitle: 'Paper que alarga em 100% quando selecionado'
    },
    decorators: [withKnobs],
    component: FluidPaper
};

export const Default = () => {
    return (
        <FluidPaper
            selected={boolean('Selecionado', false)}
            elevation={number('Elevação')}
            variant={radios('Variante', { elevation: 'elevation' })}
            square={boolean('Quadrado', false)}>
            <div style={{ padding: '16px', fontFamily: 'Montserrat' }}>
                <b> {text('Conteúdo', 'Papel fluido')} </b>
            </div>
        </FluidPaper>
    );
};
