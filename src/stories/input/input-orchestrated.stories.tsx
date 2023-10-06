import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import sourceWithError from "./sourceWithError.json";
import sourceInComponentSet from "../dropdown/sourceComponentSet.json";
import { StoryObj, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import * as custom from "../..";

const meta: Meta<typeof Orchestrator> = {
    title: "OrchestratedComponents/Input",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to enter a string. You can add a maxLength property if you want to restrict the number of characters the user can enter.",
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
