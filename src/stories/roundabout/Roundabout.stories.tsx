import { Orchestrator } from "../Orchestrator";
import { source, data } from "./default";
import { source as lockedSource, data as lockedData } from "./locked";
import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/Roundabout",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component:
                    "This component allows you to give additional information to the user on why we are asking him a question. Users like to know why they should give an information and how it will be used. In an orchestrator, it would be displayed after the continue button and before the footer so it doesn't interfer with the form if the user doesn't want to read it.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    parameters: {
        docs: {
            description: {
                story: "If the locked props is set to true then the user cannot reenter in an iteration that has been completed.",
            },
        },
    },
    args: { source: source, data: data },
} satisfies Story;

export const RoundaboutWithLocked = {
    parameters: {
        docs: {
            description: {
                story: "If the locked props is set to true then the user can not reenter in an iteration after that has been completed",
            },
        },
    },
    args: { source: lockedSource, data: lockedData },
} satisfies Story;
