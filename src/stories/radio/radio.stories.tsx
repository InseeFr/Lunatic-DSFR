import Radio from "../../Radio";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";

const stories = {
    title: "Components/Radio/states",
    component: Radio,
    argTypes: defaultArgTypes,
} as ComponentMeta<typeof Radio>;

export default stories;

const Template: ComponentStory<typeof Radio> = args => <Radio {...args} />;

export const Success = Template.bind({});

Success.args = {
    id: "SuccessMessage",
    label: "Does Spongebob live in a pineapple under the sea?",
    description: "Spongebob works for Mr. Krabs",
    disabled: false,
    errors: {
        SuccessMessage: [
            {
                id: "SuccessMessage",
                criticality: "INFO",
                typeOfControl: "CONSISTENCY",
                formula: 'not(Q2= "2")',
                labelFormula: "What else would Spongebob live in?",
                errorMessage: "What else would Spongebob live in?",
            },
        ],
    },
    options: [
        {
            value: "1",
            description: {
                props: {
                    expression: "Spongebob lives in a pineapple",
                },
            },
            label: {
                props: {
                    expression: "Yes",
                },
            },
            checked: true,
        },
        {
            value: "2",
            description: {
                props: {
                    expression: "Spongebob does not live in a pineapple",
                },
            },
            label: {
                props: {
                    expression: "No",
                },
            },
        },
    ],
};

export const Error = Template.bind({});

Error.args = {
    id: "ErrorMessage",
    label: "Does Spongebob live in a pineapple under the sea?",
    description: "Spongebob works for Mr. Krabs",
    disabled: false,
    errors: {
        ErrorMessage: [
            {
                id: "ErrorMessage",
                criticality: "WARN",
                typeOfControl: "CONSISTENCY",
                formula: 'not(Q2= "2")',
                labelFormula: "What else would Spongebob live in?",
                errorMessage: "What else would Spongebob live in?",
            },
        ],
    },
    options: [
        {
            value: "1",
            description: {
                props: {
                    expression: "Spongebob lives in a pineapple",
                },
            },
            label: {
                props: {
                    expression: "Yes",
                },
            },
        },
        {
            value: "2",
            description: {
                props: {
                    expression: "Spongebob does not live in a pineapple",
                },
            },
            label: {
                props: {
                    expression: "No",
                },
            },
            checked: true,
        },
    ],
};

export const Disabled = Template.bind({});

Disabled.args = {
    id: "DisabledMessage",
    label: "Does Spongebob live in a pineapple under the sea?",
    description: "Spongebob works for Mr. Krabs",
    disabled: true,
    options: [
        {
            value: "1",
            description: {
                props: {
                    expression: "Spongebob lives in a pineapple",
                },
            },
            label: {
                props: {
                    expression: "Yes",
                },
            },
        },
        {
            value: "2",
            description: {
                props: {
                    expression: "Spongebob does not live in a pineapple",
                },
            },
            label: {
                props: {
                    expression: "No",
                },
            },
        },
    ],
};
