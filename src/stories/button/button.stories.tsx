// import React from 'react';
import Button from "../../Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";

const stories = {
    title: "Components/Button",
    component: Button,
    argTypes: defaultArgTypes,
} as ComponentMeta<typeof Button>;

export default stories;

const Template: ComponentStory<typeof Button> = args => (
    <>
        <Button {...args} priority="primary">
            Primary Button
        </Button>
        <Button {...args} priority="secondary">
            Secondary Button
        </Button>
        <Button {...args} priority="tertiary">
            Tertiary Button
        </Button>
        <Button {...args} priority="tertiary no outline">
            Tertiary Button without outline
        </Button>
    </>
);

export const Default = Template.bind({});

Default.args = {};
