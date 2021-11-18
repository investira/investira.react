import React from 'react';
import { InfoDates } from '../components';
import { boolean, date, select, text, withKnobs } from '@storybook/addon-knobs';
import { textColors, variants } from './options';

export default {
    title: 'InfoDates',
    parameters: {
        componentSubtitle: 'Display de informações de data'
    },
    decorators: [withKnobs],
    component: InfoDates
};

export const Default = () => {
    const optionsFormat = {
        custom: 'custom',
        datetime: 'datetime',
        date: 'date',
        duration: 'duration',
        fromnow: 'fromnow'
    };
    return (
        <div
            style={{
                backgroundColor: '#191b2a',
                padding: '16px',
                borderRadius: '10px'
            }}>
            <InfoDates
                color={select('Cor da data', textColors, 'textSecondary')}
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
                    variants,
                    'caption'
                )}
                timeVariant={select(
                    'Tamanho da fonte da data',
                    variants,
                    'caption'
                )}
            />
        </div>
    );
};
