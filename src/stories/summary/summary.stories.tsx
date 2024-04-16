import { source, data } from "./default";
import type { StoryObj, Meta } from "@storybook/react";
import { Orchestrator } from "../Orchestrator";

const meta = {
    title: "Components/Summary",
    component: Orchestrator,
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source, data },
} satisfies Story;
