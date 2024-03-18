import { Orchestrator } from "../utils/Orchestrator";
import { source } from "./source";
import { source as questionSource } from "./question";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Suggester",
    component: Orchestrator,
    args: {
        autoSuggesterLoading: true,
    },
    parameters: {
        docs: {
            description: {
                component:
                    "The Suggester component is useful when users have many choices to select from. It helps them find options easily by suggesting matches as they type.",
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
