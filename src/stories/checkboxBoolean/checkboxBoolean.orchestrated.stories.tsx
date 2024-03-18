import { source } from "./default";
import type { StoryObj, Meta } from "@storybook/react";
import { Orchestrator } from "../utils/Orchestrator";

const meta = {
    title: "Components/CheckboxBoolean",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                story: "The CheckboxBoolean component allows users to select or deselect a single option. ",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = { args: { source } } satisfies Story;
