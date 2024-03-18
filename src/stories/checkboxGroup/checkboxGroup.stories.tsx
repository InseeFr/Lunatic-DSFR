import { Orchestrator } from "../utils/Orchestrator";
import { source } from "./default";
import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/CheckboxGroup",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                story: "The CheckboxGroup component provides a way for users to select one or multiple answers from a list of options.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = { args: { source } } satisfies Story;
