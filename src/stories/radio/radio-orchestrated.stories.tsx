import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import sourceWithError from "./sourceWithError.json";
import sourceSkeleton from "./sourceSkeleton.json";
import sourceInComponentSet from "../date-picker/source-componentset.json";
import type { StoryObj, Meta } from "@storybook/react";

import defaultArgTypes from "../utils/default-arg-types";

const meta: Meta<typeof Orchestrator> = {
    title: "Orchestrated Components/Radio",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component should be used if you want the user to select only one option in a list of options.",
            },
        },
    },
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
                story: "This component can be used in a ComponentSet",
            },
        },
    },
    args: { source: sourceInComponentSet },
};

export const Skeleton: Story = {
    args: { source: sourceSkeleton },
};
