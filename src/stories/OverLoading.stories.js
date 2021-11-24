import React from 'react';
import {
    boolean,
    number,
    radios,
    select,
    text,
    withKnobs
} from '@storybook/addon-knobs';
import { OverLoading } from '../components';
import { textColors, variants } from './options';

export default {
    title: 'OverLoading',
    component: OverLoading,
    decorators: [withKnobs]
};

export const Default = () => {
    return (
        <OverLoading
            backgroundFlat={boolean('Fundo plano', false)}
            open={boolean('Carregando?', true)}
            message={text('Mensagem de carregamento')}
            color={radios('Cor da mensagem', textColors, 'textSecondary')}
            variant={select('Variante', variants, 'caption')}
            size={number('Tamanho do círculo', 40)}
        />
    );
};
