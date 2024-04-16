import type { Meta, StoryObj } from "@storybook/react";
import { source } from "./default";
import { source as questionSource } from "./question";

import { Orchestrator } from "../Orchestrator";

const meta = {
    title: "Components/Textarea",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component:
                    "This component should be used when you want the user to enter a large string (maxLength > 249).",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source },
} satisfies Story;

export const Question = {
    args: { source: questionSource },
} satisfies Story;
