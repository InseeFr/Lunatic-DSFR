// import React from 'react';
import source from "./source.json";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import { Dropdown } from "../../";

const options = source.components[0].options.map((option: any) => ({
    value: option.value,
    label: {
        props: {
            expression: option.label.value,
        },
    },
}));
const stories = {
    title: "Components/Dropdown",
    component: Dropdown,
    argTypes: defaultArgTypes,
} as ComponentMeta<typeof Dropdown>;

export default stories;

const Template: ComponentStory<typeof Dropdown> = args => (
    <>
        <Dropdown
            {...args}
            options={options}
            state="default"
            stateRelatedMessage={source.components[0].controls.stateRelatedMessage.default}
        />
    </>
);
  
const TemplateError: ComponentStory<typeof Dropdown> = args => (
    <>
        <Dropdown
            {...args}
            options={options}
            state="error"
            stateRelatedMessage={source.components[0].controls.stateRelatedMessage.error}
        />
    </>
);

const TemplateSuccess: ComponentStory<typeof Dropdown> = args => (
    <>
        <Dropdown
            {...args}
            options={options}
            state="success"
            stateRelatedMessage={source.components[0].controls.stateRelatedMessage.success}
        />
    </>
);

export const Default = Template.bind({});
export const Error = TemplateError.bind({});
export const Success = TemplateSuccess.bind({});

Default.args = {};
Error.args = {};
Success.args = {};
