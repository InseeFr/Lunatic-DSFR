import { Orchestrator } from "stories/utils/Orchestrator";
import type { StoryObj, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import { source } from "./default";

const meta: Meta<typeof Orchestrator> = {
    title: "Test/Paste",
    component: Orchestrator,
    args: {
        source: source,
    },
    argTypes: {
        ...defaultArgTypes,
        source: {
            control: "object",
        },
    },
    parameters: {
        docs: {
            description: {
                story: "You can paste your questionnaire here to test it.",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {};
