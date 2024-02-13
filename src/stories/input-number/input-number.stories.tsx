import { StoryFn, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import { InputNumber } from "InputNumber";

const stories = {
    title: "Components/InputNumber",
    component: InputNumber,
    argTypes: defaultArgTypes,
} as Meta<typeof InputNumber>;

export default stories;

const Template: StoryFn<typeof InputNumber> = args => <InputNumber {...args} />;

export const Error = Template.bind({});

Error.args = {
    value: 4,
    id: "ErrorMessage",
    disabled: false,
    label: "Your favourite number",
    description: "It must be a prime number bigger than 3",
    errors: [
        {
            id: "ErrorMessage",
            criticality: "WARN",
            typeOfControl: "CONSISTENCY",
            formula: '(nvl(NB,"") = 5)',
            labelFormula: "Take another guess",
            errorMessage: "Take another guess",
        },
    ],
};

export const Success = Template.bind({});

Success.args = {
    value: 5,
    id: "SuccessMessage",
    disabled: false,
    label: "Your favourite number",
    description: "It must be a prime number bigger than 3",
    errors: [
        {
            id: "SuccessMessage",
            criticality: "INFO",
            typeOfControl: "CONSISTENCY",
            formula: '(nvl(NB,"") = 5)',
            labelFormula: "Take another guess",
            errorMessage: "Take another guess",
        },
    ],
};

export const Disabled = Template.bind({});

Disabled.args = {
    value: 1000000,
    id: "DisabledMessage",
    disabled: true,
    label: "Your favourite number",
    description: "It must be a prime number bigger than 3",
};

export const Unit = Template.bind({});

Unit.args = {
    id: "UnitMessage",
    disabled: false,
    label: "If one baguette costs 1€20, what is the price of 5 baguettes?",
    description: "This time it's not a prime number",
    unit: "€",
};

export const UnitError = Template.bind({});

UnitError.args = {
    unit: "€",
    id: "ErrorMessage",
    disabled: false,
    label: "Your favourite number",
    description: "It must be a prime number bigger than 3",
    errors: [
        {
            id: "ErrorMessage",
            criticality: "WARN",
            typeOfControl: "CONSISTENCY",
            formula: '(nvl(NB,"") = 5)',
            labelFormula: "Take another guess",
            errorMessage: "Take another guess",
        },
    ],
};

export const UnitDisabled = Template.bind({});

UnitDisabled.args = {
    unit: "€",
    id: "UnitDisabled",
    disabled: true,
    label: "Your favourite number",
    description: "It must be a prime number bigger than 3",
};

export const UnitSuccess = Template.bind({});

UnitSuccess.args = {
    unit: "€",
    id: "SuccessMessage",
    disabled: false,
    label: "Your favourite number",
    description: "It must be a prime number bigger than 3",
    errors: [
        {
            id: "SuccessMessage",
            criticality: "INFO",
            typeOfControl: "CONSISTENCY",
            formula: '(nvl(NB,"") = 5)',
            labelFormula: "Take another guess",
            errorMessage: "Take another guess",
        },
    ],
};
