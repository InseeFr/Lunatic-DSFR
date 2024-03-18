import { Orchestrator } from "../utils/Orchestrator";
import { source as dateSource } from "./date";
import { source as timeSource } from "./time";

import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/Duration",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to enter a string.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const DateStory = {
    args: { source: dateSource },
} satisfies Story;

export const TimeStory: Story = {
    args: { source: timeSource },
} satisfies Story;
