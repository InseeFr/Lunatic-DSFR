import { Orchestrator } from "../utils/Orchestrator";
import { source } from "./default";
import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/Radio",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                story: "The Radio component allows users to select only one option from a set of choices.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source: source },
} satisfies Story;
