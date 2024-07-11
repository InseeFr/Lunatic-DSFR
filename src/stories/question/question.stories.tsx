import type { Meta, StoryObj } from "@storybook/react";
import { source as oneSource } from "./one";
import { source as twoSource } from "./two";
import { Orchestrator } from "../Orchestrator";

const meta = {
    title: "Components/Question",
    component: Orchestrator,
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const OneComponent = {
    args: { source: oneSource },
} satisfies Story;

export const TwoComponents = {
    args: { source: twoSource },
} satisfies Story;
