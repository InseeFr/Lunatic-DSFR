import { Orchestrator } from "../utils/Orchestrator";
import { source, data } from "./default";
import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/Pairwise",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component: "This component allows you to pass symetric links.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source: source, data: data },
} satisfies Story;
