import { Orchestrator } from "../Orchestrator";

import { source } from "./default";
import { source as questionSource } from "./question";

import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/MDLink",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component: "A simple demo of MDLink in a input component",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source: source },
} satisfies Story;

export const Question = {
    args: { source: questionSource },
} satisfies Story;
