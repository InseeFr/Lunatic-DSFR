import CheckboxGroup from "../../CheckboxGroup";
import { StoryFn, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";

const stories = {
    title: "Components/Checkbox",
    component: CheckboxGroup,
    argTypes: defaultArgTypes,
} as Meta<typeof CheckboxGroup>;

export default stories;

const Template: StoryFn<typeof CheckboxGroup> = args => <CheckboxGroup {...args} />;

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
            name: "Paris",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Bordeaux",
            description: "Bordeaux is where you can find great wine!",
            checked: false,
            name: "Bordeaux",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Geneva",
            description: "There is great Swiss chocolate in Geneva",
            checked: true,
            name: "Geneva",
            onClick: () => {
                console.log("hi");
            },
        },
    ],
    errors: [
        {
            id: "ErrorMessage",
            criticality: "WARN",
            typeOfControl: "CONSISTENCY",
            formula: "OPT3 = false",
            labelFormula: "Take another guess",
            errorMessage: "Take another guess",
        },
    ],
};

export const Success = Template.bind({});

Success.args = {
    id: "SuccessMessage",
    disabled: false,
    label: "Which of these cities are in France?",
    description: "If you select a city that is not in France, an error will appear!",
    options: [
        {
            label: "Paris",
            description: "Paris is the capital city!",
            checked: true,
            name: "Paris",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Bordeaux",
            description: "Bordeaux is where you can find great wine!",
            checked: true,
            name: "Bordeaux",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Geneva",
            description: "There is great Swiss chocolate in Geneva",
            checked: false,
            name: "Geneva",
            onClick: () => {
                console.log("hi");
            },
        },
    ],
    errors: [
        {
            id: "SuccessMessage",
            criticality: "INFO",
            typeOfControl: "CONSISTENCY",
            formula: '(nvl(NB,"") = 5)',
            labelFormula: "Great work!",
            errorMessage: "Great work!",
        },
    ],
};

export const Disabled = Template.bind({});

Disabled.args = {
    id: "DisabledMessage",
    disabled: true,
    label: "Which of these cities are in France?",
    description: "If you select a city that is not in France, an error will appear!",
    errors: [],
    options: [
        {
            label: "Paris",
            description: "Paris is the capital city!",
            checked: true,
            name: "Paris",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Bordeaux",
            description: "Bordeaux is where you can find great wine!",
            checked: false,
            name: "Bordeaux",
            onClick: () => {
                console.log("hi");
            },
        },
        {
            label: "Geneva",
            description: "There is great Swiss chocolate in Geneva",
            checked: false,
            name: "Geneva",
            onClick: () => {
                console.log("hi");
            },
        },
    ],
};
