import Input from "../../Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";

const stories = {
    title: "Components/Input/states",
    component: Input,
    argTypes: defaultArgTypes,
} as ComponentMeta<typeof Input>;

export default stories;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Error = Template.bind({});

Error.args = {
    value: "Jerry",
    id: "ErrorMessage",
    disabled: false,
    label: "What's the name of Spongebob's pet snail?",
    description: "Spongebob's pet snail meows like a cat.",
    errors: {
        ErrorMessage: [
            {
                id: "ErrorMessage",
                criticality: "WARN",
                typeOfControl: "CONSISTENCY",
                formula: '(nvl(NAME,"") = "Garry")',
                labelFormula: "Take another guess",
                errorMessage: "Take another guess",
            },
        ],
    },
};

export const Success = Template.bind({});

Success.args = {
    value: "Garry",
    id: "SuccessMessage",
    disabled: false,
    label: "What's the name of Spongebob's pet snail?",
    description: "Spongebob's pet snail meows like a cat.",
    errors: {
        SuccessMessage: [
            {
                id: "SuccessMessage",
                criticality: "INFO",
                typeOfControl: "CONSISTENCY",
                formula: '(nvl(NAME,"") = "Garry")',
                labelFormula: "Take another guess",
                errorMessage: "Take another guess",
            },
        ],
    },
};

export const Disabled = Template.bind({});

Disabled.args = {
    value: "Garry",
    id: "DisabledMessage",
    disabled: true,
    label: "What's the name of Spongebob's pet snail?",
    description: "Spongebob's pet snail meows like a cat.",
    errors: {},
};
