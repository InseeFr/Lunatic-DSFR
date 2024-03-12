import { Orchestrator } from "../utils/Orchestrator";
import { source } from "./source";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Suggester",
    component: Orchestrator,
    args: {
        autoSuggesterLoading: true,
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source },
} satisfies Story;
