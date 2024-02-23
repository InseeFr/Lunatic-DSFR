import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import source1 from "./source1.json";
import sourceSkeleton from "./sourceSkeleton.json";
import data from "./data.json";
import data1 from "./data1.json";
import type { StoryObj, Meta } from "@storybook/react";

import defaultArgTypes from "../utils/default-arg-types";

const meta: Meta<typeof Orchestrator> = {
    title: "Orchestrated Components/ComponentSet",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want to display multiple component in one page.",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {
    args: { source: source, data: data },
};

export const WithError: Story = {
    parameters: {
        docs: {
            description: {
                story: "Click next to make the error appear",
            },
        },
    },
    args: { source: source1, data: data1 },
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
