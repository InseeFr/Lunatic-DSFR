import type { Meta, StoryFn } from "@storybook/react";

import defaultArgTypes from "../utils/default-arg-types";
import { Input } from "Input";

const stories = {
    title: "Components/Input",
    component: Input,
    argTypes: defaultArgTypes,
} as Meta<typeof Input>;

export default stories;

const Template: StoryFn<typeof Input> = args => <Input {...args} />;

export const Error = Template.bind({});

Error.args = {
    value: "Jerry",
    id: "ErrorMessage",
    disabled: false,
    label: "What's the name of Spongebob's pet snail?",
    description: "Spongebob's pet snail meows like a cat.",
    errors: [
        {
            id: "ErrorMessage",
            criticality: "WARN",
            typeOfControl: "CONSISTENCY",
            errorMessage: "Take another guess",
        },
    ],
};

export const Success = Template.bind({});

Success.args = {
    value: "Garry",
    id: "SuccessMessage",
    disabled: false,
    label: "What's the name of Spongebob's pet snail?",
    description: "Spongebob's pet snail meows like a cat.",
    errors: [
        {
            id: "SuccessMessage",
            criticality: "INFO",
            typeOfControl: "CONSISTENCY",
            errorMessage: "Take another guess",
        },
    ],
};

export const Disabled = Template.bind({});

Disabled.args = {
    value: "Garry",
    id: "DisabledMessage",
    disabled: true,
    label: "What's the name of Spongebob's pet snail?",
    description: "Spongebob's pet snail meows like a cat.",
    errors: [],
};
