import { Orchestrator } from "../Orchestrator";

import { source } from "./default";
import { source as questionSource } from "./question";
import { source as horizontalSource } from "./horizontal";
import { source as detailSource } from "./detail";

import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/Radio",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component:
                    "The Radio component allows users to select only one option from a set of choices.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source: source },
} satisfies Story;

export const Horizontal = {
    args: { source: horizontalSource },
} satisfies Story;

export const withDetail = {
    args: { source: detailSource, detailAlwaysDisplayed: false },
    argTypes: {
        detailAlwaysDisplayed: {
            table: { disable: false },
        },
    },
} satisfies Story;

export const Question = {
    args: { source: questionSource },
} satisfies Story;
