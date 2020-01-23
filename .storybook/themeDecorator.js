import React from 'react';
import { ThemeProvider } from '../src/components';
import { themePrimary } from '../src/components/styles/invThemes';
import { ReactComponent as IconSprite } from '../src/global/symbol-defs.svg';

const ThemeDecorator = storyFn => (
    <div id={'test-root'} className={'themePrimary'}>
        <ThemeProvider theme={themePrimary}>{storyFn()}</ThemeProvider>
        <IconSprite />
    </div>
);

export default ThemeDecorator;
