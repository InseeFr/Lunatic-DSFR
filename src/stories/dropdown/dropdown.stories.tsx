import { StoryFn, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import { Dropdown } from "Dropdown";

const stories = {
    title: "Components/Dropdown",
    component: Dropdown,
    argTypes: defaultArgTypes,
} as Meta<typeof Dropdown>;

export default stories;

const Template: StoryFn<typeof Dropdown> = args => <Dropdown {...args} />;

export const Error = Template.bind({});

Error.args = {
    disabled: false,
    label: "In which state do The Simpsons reside?",
    description: "This is a test description",
    options: [
        {
            value: "1",
            label: "Washington",
        },
        {
            value: "2",
            label: "Kentucky",
        },
        { value: "3", label: "Ohio" },
        { value: "4", label: "Maine" },
        {
            value: "5",
            label: "North Dakota",
        },
        { value: "6", label: "Florida" },
        {
            value: "7",
            label: "North Takoma",
        },
        {
            value: "8",
            label: "California",
        },
        { value: "9", label: "Texas" },
        {
            value: "10",
            label: "Massachusetts",
        },
        { value: "11", label: "Nevada" },
        {
            value: "12",
            label: "Illinois",
        },
        {
            value: "13",
            label: "Not in any state fool!",
        },
    ],
    errors: [
        {
            id: "ErrorMessage",
            criticality: "WARN",
            typeOfControl: "CONSISTENCY",
            formula: 'not(nvl(STATE,"") = "13")',
            labelFormula: "Please choose a state!",
            errorMessage: "Please choose a state!",
        },
    ],
};

export const Success = Template.bind({});

Success.args = {
    disabled: false,
    label: "In which state do The Simpsons reside?",
    description: "This is a test description",
    errors: [
        {
            id: "SuccessMessage",
            criticality: "INFO",
            typeOfControl: "CONSISTENCY",
            formula: 'not(nvl(STATE,"") = "4")',
            labelFormula: "Idk if this is right, I'm just testing error messages!!",
            errorMessage: "Idk if this is right, I'm just testing error messages!!",
        },
    ],
    options: [
        {
            value: "1",
            label: "Washington",
        },
        {
            value: "2",
            label: "Kentucky",
        },
        { value: "3", label: "Ohio" },
        { value: "4", label: "Maine" },
        {
            value: "5",
            label: "North Dakota",
        },
        { value: "6", label: "Florida" },
        {
            value: "7",
            label: "North Takoma",
        },
        {
            value: "8",
            label: "California",
        },
        { value: "9", label: "Texas" },
        {
            value: "10",
            label: "Massachusetts",
        },
        { value: "11", label: "Nevada" },
        {
            value: "12",
            label: "Illinois",
        },
        {
            value: "13",
            label: "Not in any state fool!",
        },
    ],
};

export const Disabled = Template.bind({});

Disabled.args = {
    disabled: true,
    label: "In which state do The Simpsons reside?",
    description: "This is a test description",
    errors: [],
    options: [
        {
            value: "1",
            label: "Washington",
        },
        {
            value: "2",
            label: "Kentucky",
        },
        { value: "3", label: "Ohio" },
        { value: "4", label: "Maine" },
        {
            value: "5",
            label: "North Dakota",
        },
        { value: "6", label: "Florida" },
        {
            value: "7",
            label: "North Takoma",
        },
        {
            value: "8",
            label: "California",
        },
        { value: "9", label: "Texas" },
        {
            value: "10",
            label: "Massachusetts",
        },
        { value: "11", label: "Nevada" },
        {
            value: "12",
            label: "Illinois",
        },
        {
            value: "13",
            label: "Not in any state fool!",
        },
    ],
};
