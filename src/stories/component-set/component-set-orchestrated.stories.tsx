import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import data from "./data.json";
import sourceLoop from "./source1.json";
import dataLoop from "./data1.json";
import sourceRoundabout from "./source2.json";
import dataRoundabout from "./data2.json";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import * as custom from "../..";

const stories = {
    title: "Components/ComponentSet",
    component: Orchestrator,
    argTypes: defaultArgTypes,
} as ComponentMeta<typeof Orchestrator>;

export default stories;

const Template: ComponentStory<typeof Orchestrator> = args => <Orchestrator {...args} custom={custom} />;
export const Default = Template.bind({});

Default.args = { id: "component-set", source, data };

export const InRoundabout = Template.bind({});

InRoundabout.args = {
    id: "component-set-roundabout",
    source: sourceRoundabout,
    data: dataRoundabout,
};

export const InLoop = Template.bind({});

InLoop.args = {
    id: "component-set-loop",
    source: sourceLoop,
    data: dataLoop,
};
