import { Orchestrator } from "../utils/Orchestrator";
import { source } from "./default";
import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/Dropdown",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to select an option in a list of more than 3 options.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source: source },
} satisfies Story;
