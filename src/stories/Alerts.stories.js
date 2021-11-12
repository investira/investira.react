import React from 'react';
import { Alerts } from '../components';
import {
    withKnobs,
    text,
    boolean,
    select,
    radios
} from '@storybook/addon-knobs';
import { alertsColors, textColors, icons } from './options';

export default {
    title: 'Alerts',
    parameters: {
        componentSubtitle: 'Alertas'
    },
    decorators: [withKnobs],
    component: Alerts
};

export const Default = () => {
    return (
        <Alerts
            close={boolean('close', true)}
            iconName={select('Ícone', icons, 'callcenter')}
            open={boolean('open', true)}
            backgroundColor={select('Cor de fundo', alertsColors, 'default')}
            color={radios('Cor de texto', textColors)}>
            {text('Conteúdo', 'Este é um alerta.')}{' '}
        </Alerts>
    );
};
