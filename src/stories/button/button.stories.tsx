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

function capitalise(s: string | boolean) {
    return `${s.toString().charAt(0).toUpperCase() + s.toString().slice(1)}`;
}
function ButtonName(disabled?: boolean, priority?: string) {
    if (disabled) {
        return "Disabled";
    } else if (priority) {
        return capitalise(priority);
    } else {
        return "Default";
    }
}

const Template: ComponentStory<typeof Button> = args => (
    <>
        <Button {...args}>{ButtonName(args.disabled, args.priority)} Button</Button>
    </>
);

export const Default = Template.bind({});

Default.args = {};

export const Primary = Template.bind({});

Primary.args = { priority: "primary" };

export const Secondary = Template.bind({});

Secondary.args = { priority: "secondary" };

export const Tertiary = Template.bind({});

Tertiary.args = { priority: "tertiary" };

export const TertiaryNoOutline = Template.bind({});

TertiaryNoOutline.args = { priority: "tertiary no outline" };

export const Disabled = Template.bind({});

Disabled.args = { disabled: true };
