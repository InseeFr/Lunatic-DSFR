import { Orchestrator } from "../Orchestrator";
import { source as questionSource } from "./question";

import { source } from "./default";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Sequence",
    component: Orchestrator,
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source },
} satisfies Story;

export const Question = {
    args: { source: questionSource },
} satisfies Story;
