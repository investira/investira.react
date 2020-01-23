import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';
import '../src/global/global.css';

addDecorator(themeDecorator);
