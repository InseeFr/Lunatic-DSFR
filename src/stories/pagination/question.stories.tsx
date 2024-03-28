import { LunaticSource } from "@inseefr/lunatic";
import { Orchestrator } from "../utils/Orchestrator";
import { source as questionSource } from "./question";
import { source as sequenceSource } from "./sequence";

import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Survey/Pagination",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component: "",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Question = {
    args: { source: questionSource },
} satisfies Story;

export const Sequence = {
    args: { source: sequenceSource as LunaticSource },
} satisfies Story;
