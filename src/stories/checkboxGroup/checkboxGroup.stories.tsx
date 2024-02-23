import type { Meta, StoryObj } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import { CheckboxGroup } from "CheckboxGroup";

const meta: Meta<typeof CheckboxGroup> = {
    title: "Components/Checkbox",
    component: CheckboxGroup,
    argTypes: defaultArgTypes,
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Error: Story = {
    args: {
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
                errorMessage: "Take another guess",
            },
        ],
    },
};

export const Success: Story = {
    args: {
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
                errorMessage: "Great work!",
            },
        ],
    },
};

export const Disabled: Story = {
    args: {
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
    },
};
