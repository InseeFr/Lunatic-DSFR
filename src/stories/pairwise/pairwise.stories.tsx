import { Orchestrator } from "../utils/Orchestrator";
import { source, data } from "./default";
import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/Pairwise",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                story: "This component allows you to pass symetric links.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {
    args: { source: source, data: data },
};
