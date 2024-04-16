import { Orchestrator } from "../Orchestrator";

import { source } from "./default";
import { source as questionSource } from "./question";

import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/CheckboxGroup",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component:
                    "The CheckboxGroup component provides a way for users to select one or multiple answers from a list of options.",
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
