import { source } from "./default";
import { source as questionSource } from "./question";
import type { StoryObj, Meta } from "@storybook/react";
import { Orchestrator } from "../utils/Orchestrator";

const meta = {
    title: "Components/Table",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component:
                    "The Table presents information in a structured format of rows and columns. The data is displayed in a user-friendly, quick-to-scan and interactive way, enabling users to efficiently identify patterns, edit data, and gather insights.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = { args: { source } } satisfies Story;

export const Question = {
    args: { source: questionSource },
} satisfies Story;
