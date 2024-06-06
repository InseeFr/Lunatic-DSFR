import { Orchestrator } from "../Orchestrator";

import { source } from "./default";
import { source as questionSource } from "./question";
import { source as arbitrarySource } from "./arbitrary";

import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/Radio",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component:
                    "The Radio component allows users to select only one option from a set of choices.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source: source },
} satisfies Story;

export const Arbitrary = {
    args: { source: arbitrarySource },
} satisfies Story;

export const Question = {
    args: { source: questionSource },
} satisfies Story;
