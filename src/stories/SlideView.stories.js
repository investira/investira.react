import React from 'react';
import { boolean, number, radios, withKnobs } from '@storybook/addon-knobs';
import { SlideView } from '../components';

export default {
    title: 'SlideView',
    component: SlideView,
    decorators: [withKnobs]
};

export const Default = () => {
    const words = [
        't  he sky',
        'above',
        'the port',
        'was',
        'the color of television',
        'tuned',
        'to',
        'a dead channel',

        'all',
        'this happened',
        'more or less',

        'I',
        'had',
        'the story',
        'bit by bit',
        'from various people',
        'and',
        'as generally',
        'happens',
        'in such cases',
        'each time',
        'it',
        'was',
        'a different story',

        'it',
        'was',
        'a pleasure',
        'to',
        'burn'
    ];

    return (
        <div style={{ height: '300px', width: '300px' }}>
            <SlideView
                swipeable={boolean('Swipeable', true)}
                backButton={boolean('Botão de voltar', true)}
                nextButton={boolean('Botão de próximo', true)}
                id="intro"
                area={radios('Área', ['content', 'container'], 'content')}
                nav={radios('Navegação', ['arrows', 'dots'])}
                step={number('Passo', 0)}>
                {[...Array(number('Quantidade de slides', 4))].map((_, i) => {
                    const text = [];
                    for (
                        let j = 0;
                        j < number('Quantidade de palavras em cada slide', 10);
                        j++
                    ) {
                        text.push(
                            ' ' +
                                words[
                                    Math.floor(Math.random() * words.length)
                                ] +
                                ' '
                        );
                    }

                    return <div id={`slide${i}`}> {text}</div>;
                })}
            </SlideView>
        </div>
    );
};
