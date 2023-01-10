import React from 'react';
import Orchestrator from '../utils/Orchestrator';
import source from './source.json';
// import data from './data.json';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import sourceEuros from './source-euros.json';
import defaultArgTypes from '../utils/default-arg-types';
import * as custom from "../../components"
// const custom = {}
const stories = {
	title: 'Components/InputNumber',
	component: Orchestrator,
	argTypes: defaultArgTypes,
};

export default stories;

const Template: ComponentStory<typeof Orchestrator> = (args) => <Orchestrator {...args} custom={custom} />;

export const Default = Template.bind({});

Default.args = { source };

export const UnitEuros = Template.bind({});

UnitEuros.args = { source: sourceEuros };

