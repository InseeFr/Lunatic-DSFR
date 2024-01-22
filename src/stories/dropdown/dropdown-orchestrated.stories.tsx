import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import sourceSkeleton from "./sourceSkeleton.json";
import sourceWithError from "./sourceWithError.json";
import sourceComponentSet from "./sourceComponentSet.json";
import { StoryObj, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import * as custom from "../..";

const meta: Meta<typeof Orchestrator> = {
    title: "OrchestratedComponents/Dropdown",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to select an option in a list of more than 3 options.",
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
                story: "Click next to make the error appear",
            },
        },
    },
    args: { source: sourceWithError },
};

export const Skeleton: Story = {
    parameters: {
        docs: {
            description: {
                story: "Click next to make the error appear",
            },
        },
    },
    args: { source: sourceSkeleton },
};

export const InComponentSet: Story = {
    parameters: {
        docs: {
            description: {
                story: "You can use a dropdown within a component set.",
            },
        },
    },
    args: { source: sourceComponentSet },
};
