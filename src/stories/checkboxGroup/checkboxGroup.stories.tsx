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
    value: { "Geneva": true },
    description: "If you select a city that is not in France, an error will appear!",
    options: [
        {
            label: "Paris",
            description: "Paris is the capital city!",
            value: 1,
            name: "Paris",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Bordeaux",
            description: "Bordeaux is where you can find great wine!",
            value: 2,
            name: "Bordeaux",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Geneva",
            description: "There is great Swiss chocolate in Geneva",
            value: 3,
            name: "Geneva",
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
    value: { "Bordeaux": true, "Paris": true },
    description: "If you select a city that is not in France, an error will appear!",
    options: [
        {
            label: "Paris",
            description: "Paris is the capital city!",
            value: 1,
            name: "Paris",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Bordeaux",
            description: "Bordeaux is where you can find great wine!",
            value: 2,
            name: "Bordeaux",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Geneva",
            description: "There is great Swiss chocolate in Geneva",
            value: 3,
            name: "Geneva",
            onClick: () => {
                console.log("hi");
            },
        },
    ],
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
};

export const Disabled = Template.bind({});

Disabled.args = {
    id: "DisabledMessage",
    disabled: true,
    label: "Which of these cities are in France?",
    description: "If you select a city that is not in France, an error will appear!",
    errors: {},
    value: { "Paris": true },
    options: [
        {
            label: "Paris",
            description: "Paris is the capital city!",
            value: 1,
            name: "Paris",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Bordeaux",
            description: "Bordeaux is where you can find great wine!",
            value: 2,
            name: "Bordeaux",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Geneva",
            description: "There is great Swiss chocolate in Geneva",
            value: 3,
            name: "Geneva",
            onClick: () => {
                console.log("hi");
            },
        },
    ],
};
