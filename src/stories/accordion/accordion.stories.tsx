import { source } from "./default";
import type { StoryObj, Meta } from "@storybook/react";
import { Orchestrator } from "../Orchestrator";
import { source as questionSource } from "./question";

const meta = {
    title: "Components/Accordion",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component:
                    "The Accordion is designed to display extra information in/after Question, Sequence or SubSequence ",
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
