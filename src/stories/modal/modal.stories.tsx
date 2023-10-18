import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import { StoryObj, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import * as custom from "../..";

const meta: Meta<typeof Orchestrator> = {
    title: "OrchestratedComponents/Modal",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want to interrupt the user's journey and bring his attention to something.",
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
