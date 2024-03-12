import { Orchestrator } from "../utils/Orchestrator";
import { source } from "./default";
import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/Radio",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                story: "This component should be used if you want the user to select only one option in a list of options.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {
    args: { source: source },
};
