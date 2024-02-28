import type { Meta, StoryObj } from "@storybook/react";
import source from "./source.json";
import Orchestrator from "stories/utils/Orchestrator";

const meta = {
    title: "Orchestrated Components/Textarea",
    tags: ["autodocs"],
    component: Orchestrator,
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source },
} satisfies Story;
