import React from 'react';
import Orchestrator from '../utils/Orchestrator';
import source from './source.json';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import defaultArgTypes from '../utils/default-arg-types';
import * as custom from "../../components"
// test 3
const stories = {
	title: 'Components/InputNumber',
	component: Orchestrator,
	argTypes: defaultArgTypes,
};

export default stories;

const Template: ComponentStory<typeof Orchestrator> = (args) => <Orchestrator {...args} custom={custom} />;

export const Default = Template.bind({});

Default.args = { source };

