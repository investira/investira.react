import React from 'react';
import { array, boolean, number, withKnobs } from '@storybook/addon-knobs';
import { Typedy } from '../components';

export default {
    title: 'Typedy',
    parameters: {
        componentSubtitle: 'Efeito de digitação no texto'
    },
    decorators: [withKnobs],
    component: Typedy
};

export const Default = () => {
    return (
        <Typedy
            typeSpeed={number('Velocidade', 30)}
            loop={boolean('Loop', true)}
            smartBackspace={boolean('Apagar o texto ao fim', true)}
            backDelay={number('Tempo de espera para voltar', 5000)}
            backSpeed={number('Velocidade de volta', 30)}
            strings={array('Textos', [
                'Olá, meu nome é',
                'Eu sou um',
                'Eu sou um desenvolvedor'
            ])}
        />
    );
};
