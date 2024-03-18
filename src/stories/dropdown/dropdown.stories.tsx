import { Orchestrator } from "../utils/Orchestrator";
import { source } from "./default";
import { source as questionSource } from "./question";

import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/Dropdown",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component:
                    "This component should be used when you want the user to select an option in a list of more than 3 options.",
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
