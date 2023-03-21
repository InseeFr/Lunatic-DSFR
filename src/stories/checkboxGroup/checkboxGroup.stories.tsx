import CheckboxGroup from "../../CheckboxGroup";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";

const stories = {
    title: "Components/CheckboxGroup/states",
    component: CheckboxGroup,
    argTypes: defaultArgTypes,
} as ComponentMeta<typeof CheckboxGroup>;

export default stories;

const Template: ComponentStory<typeof CheckboxGroup> = args => <CheckboxGroup {...args} />;

export const Error = Template.bind({});

Error.args = {
    id: "ErrorMessage",
    disabled: false,
    label: "Which of these cities are in France?",
    description: "If you select a city that is not in France, an error will appear!",
    options: [
        {
            label: "Paris",
            description: "Paris is the capital city!",
            checked: false,
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Bordeaux",
            description: "Bordeaux is where you can find great wine!",
            checked: false,
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Geneva",
            description: "There is great Swiss chocolate in Geneva",
            checked: true,
            onClick: () => {
                console.log("hi");
            },
        },
    ],
    errors: {
        ErrorMessage: [
            {
                id: "ErrorMessage",
                criticality: "WARN",
                typeOfControl: "CONSISTENCY",
                formula: "OPT3 = false",
                labelFormula: "Take another guess",
                errorMessage: "Take another guess",
            },
        ],
    },
};

export const Success = Template.bind({});

Success.args = {
    id: "SuccessMessage",
    disabled: false,
    label: "Which of these cities are in France?",
    description: "If you select a city that is not in France, an error will appear!",
    errors: {
        SuccessMessage: [
            {
                id: "SuccessMessage",
                criticality: "INFO",
                typeOfControl: "CONSISTENCY",
                formula: '(nvl(NB,"") = 5)',
                labelFormula: "Great work!",
                errorMessage: "Great work!",
            },
        ],
    },
    options: [
        {
            label: "Paris",
            description: "Paris is the capital city!",
            checked: true,
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Bordeaux",
            description: "Bordeaux is where you can find great wine!",
            checked: true,
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Geneva",
            description: "There is great Swiss chocolate in Geneva",
            checked: false,
            onClick: () => {
                console.log("hi");
            },
        },
    ],
};

export const Disabled = Template.bind({});

Disabled.args = {
    id: "DisabledMessage",
    disabled: true,
    label: "Which of these cities are in France?",
    description: "If you select a city that is not in France, an error will appear!",
    errors: {},
    options: [
        {
            label: "Paris",
            description: "Paris is the capital city!",
            checked: false,
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Bordeaux",
            description: "Bordeaux is where you can find great wine!",
            checked: false,
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Geneva",
            description: "There is great Swiss chocolate in Geneva",
            checked: false,
            onClick: () => {
                console.log("hi");
            },
        },
    ],
};
