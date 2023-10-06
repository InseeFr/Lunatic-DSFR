// import React from 'react';
import Button from "../../Button";
import { StoryFn, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import { BUTTON_PRIORITIES } from "../../utils/constants/buttonConstants";

const { PRIMARY, SECONDARY, TERTIARY, TERTIARY_NO_OUTLINE } = BUTTON_PRIORITIES;

const stories = {
    title: "Components/Button",
    component: Button,
    argTypes: defaultArgTypes,
} as Meta<typeof Button>;

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

const Template: StoryFn<typeof Button> = args => (
    <>
        <Button {...args}>{ButtonName(args.disabled, args.priority)} Button</Button>
    </>
);

export const Default = Template.bind({});

Default.args = {};

export const Primary = Template.bind({});

Primary.args = { priority: PRIMARY };

export const Secondary = Template.bind({});

Secondary.args = { priority: SECONDARY };

export const Tertiary = Template.bind({});

Tertiary.args = { priority: TERTIARY };

export const TertiaryNoOutline = Template.bind({});

TertiaryNoOutline.args = { priority: TERTIARY_NO_OUTLINE };

export const Disabled = Template.bind({});

Disabled.args = { disabled: true };
