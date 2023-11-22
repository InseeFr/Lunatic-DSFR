import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import sourceWithError from "./sourceWithError.json";
import sourceWithUnit from "./sourceWithUnit.json";
import sourceInComponentSet from "./sourceWithComponentSet.json";
import { StoryObj, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import * as custom from "../..";

const meta: Meta<typeof Orchestrator> = {
    title: "OrchestratedComponents/InputNumber",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to enter a number. You can add a min and max property if you want to restrict the number the user can enter. You can also specify the number of decimals allowed.",
            },
        },
    },
    args: { custom },
};

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {
    args: { source: source },
};

export const WithError: Story = {
    parameters: {
        docs: {
            description: {
                story: "Click next to make the error appear.",
            },
        },
    },
    args: { source: sourceWithError },
};

export const WithUnit: Story = {
    parameters: {
        docs: {
            description: {
                story: "You can specify a unit.",
            },
        },
    },
    args: { source: sourceWithUnit },
};

export const InComponentSet: Story = {
    parameters: {
        docs: {
            description: {
                story: "You can use an Input in a ComponentSet component",
            },
        },
    },
    args: { source: sourceInComponentSet },
};