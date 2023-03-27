import InputNumber from "../../InputNumber";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";

const stories = {
    title: "Components/InputNumber/states",
    component: InputNumber,
    argTypes: defaultArgTypes,
} as ComponentMeta<typeof InputNumber>;

export default stories;

const Template: ComponentStory<typeof InputNumber> = args => <InputNumber {...args} />;

export const Error = Template.bind({});

Error.args = {
    value: 4,
    id: "ErrorMessage",
    disabled: false,
    label: "What is your favourite number?",
    description: "It must be a prime number bigger than 3",
    errors: {
        ErrorMessage: [
            {
                id: "ErrorMessage",
                criticality: "WARN",
                typeOfControl: "CONSISTENCY",
                formula: '(nvl(NB,"") = 5)',
                labelFormula: "Take another guess",
                errorMessage: "Take another guess",
            },
        ],
    },
};

export const Success = Template.bind({});

Success.args = {
    value: 5,
    id: "SuccessMessage",
    disabled: false,
    label: "What is your favourite number?",
    description: "It must be a prime number bigger than 3",
    errors: {
        SuccessMessage: [
            {
                id: "SuccessMessage",
                criticality: "INFO",
                typeOfControl: "CONSISTENCY",
                formula: '(nvl(NB,"") = 5)',
                labelFormula: "Take another guess",
                errorMessage: "Take another guess",
            },
        ],
    },
};

export const Disabled = Template.bind({});

Disabled.args = {
    value: 1000000,
    id: "DisabledMessage",
    disabled: true,
    label: "What is your favourite number?",
    description: "It must be a prime number bigger than 3",
    errors: {},
};

export const Unit = Template.bind({});

Unit.args = {
    id: "UnitMessage",
    disabled: false,
    label: "If one baguette costs 1€20, what is the price of 5 baguettes?",
    description: "This time it's not a prime number",
    unit: "€",
    errors: {
        ErrorMessage: [
            {
                id: "ErrorMessage",
                criticality: "WARN",
                typeOfControl: "CONSISTENCY",
                formula: '(nvl(NB,"") = 6)',
                labelFormula: "Take another guess",
                errorMessage: "Take another guess",
            },
        ],
    },
};
