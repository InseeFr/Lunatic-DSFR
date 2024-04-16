import type { Meta, StoryObj } from "@storybook/react";
import { source } from "./default";
import { Orchestrator } from "../Orchestrator";

const meta = {
    title: "Components/Question",
    component: Orchestrator,
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source },
} satisfies Story;
