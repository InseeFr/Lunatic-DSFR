import { Orchestrator } from "../utils/Orchestrator";
import type { StoryObj, Meta } from "@storybook/react";
import { source } from "./default";

const meta = {
    title: "Test/Paste",
    component: Orchestrator,
    args: {
        source: source,
    },
    argTypes: {
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
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {};
