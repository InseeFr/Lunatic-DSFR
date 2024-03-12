import { Orchestrator } from "../utils/Orchestrator";
import { source, data } from "./default";
import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/DatePicker",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to enter a date.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source: source, data: data },
} satisfies Story;
