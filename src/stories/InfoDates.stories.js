import React from 'react';
import { InfoDates } from '../components';
import { boolean, date, select, text, withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'InfoDates',
    parameters: {
        componentSubtitle: 'Display de informações de data'
    },
    decorators: [withKnobs],
    component: InfoDates
};

export const Default = () => {
    const optionsColor = {
        textPrimary: 'textPrimary',
        textSecondary: 'textSecondary'
    };
    const optionsVariant = {
        button: 'button',
        caption: 'caption',
        body1: 'body1',
        body2: 'body2',
        h6: 'h6',
        h5: 'h5',
        h4: 'h4',
        h3: 'h3',
        h2: 'h2',
        h1: 'h1'
    };

    const optionsFormat = {
        custom: 'custom',
        datetime: 'datetime',
        date: 'date',
        duration: 'duration',
        fromnow: 'fromnow'
    };
    return (
        <InfoDates
            color={select('Cor da data', optionsColor, 'textSecondary')}
            direction={select('Direção', {
                horizontal: 'horizontal',
                vertical: 'vertical'
            })}
            bold={boolean('Negrito', false)}
            format={text('Formato (moment.js)')}
            colon={(boolean('Dois pontos'), false)}
            gutterBottom={boolean('gutterBottom', true)}
            label={text('Label', 'Label')}
            time={date('Data')}
            variant={select('Formatação', optionsFormat, 'datetime')}
            labelVariant={select(
                'Tamanho da fonte da label',
                optionsVariant,
                'caption'
            )}
            timeVariant={select(
                'Tamanho da fonte da data',
                optionsVariant,
                'caption'
            )}
        />
    );
};
