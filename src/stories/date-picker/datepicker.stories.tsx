import sourceInComponentSet from "./source-componentset.json";
import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import sourceWithError from "./sourceWithError.json";
import sourceSkeleton from "./sourceSkeleton.json";
import data from "./data.json";
import dataWithError from "./dataWithError.json";
import { StoryObj, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";

const meta: Meta<typeof Orchestrator> = {
    title: "Orchestrated Components/DatePicker",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to enter a date.",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {
    args: { source: source, data: data },
};

export const Error: Story = {
    args: { source: sourceWithError, data: dataWithError },
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want to display multiple component in one page.",
            },
        },
    },
};

export const InComponentSet: Story = {
    args: { source: sourceInComponentSet },
};

export const Skeleton: Story = {
    args: { source: sourceSkeleton },
};
