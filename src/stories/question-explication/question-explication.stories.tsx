import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import sourceSkeleton from "./sourceSkeleton.json";
import { StoryObj, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import * as custom from "../..";

const meta: Meta<typeof Orchestrator> = {
    title: "OrchestratedComponents/QuestionExplication",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component allows you to give additional information to the user on why we are asking him a question. Users like to know why they should give an information and how it will be used. In an orchestrator, it would be displayed after the continue button and before the footer so it doesn't interfer with the form if the user doesn't want to read it.",
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

export const Skeleton: Story = {
    args: { source: sourceSkeleton },
};
