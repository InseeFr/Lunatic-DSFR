import React from 'react';
import Orchestrator from '../utils/Orchestrator';
import source from './source.json';
// import data from './data.json';
import {ComponentStory, ComponentMeta} from '@storybook/react';

const stories = { 
    title: 'Components/Roundabout',
    component: Orchestrator, 
    // argTypes: defaultArgTypes,
} as ComponentMeta<typeof Orchestrator>;  

export default stories;

export const Template: ComponentStory<typeof Orchestrator> = () => <Orchestrator source={source} />;
