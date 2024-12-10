import { Orchestrator } from "../Orchestrator";

import type { StoryObj, Meta } from "@storybook/react";
import { source as questionSource } from "./question";
import { source as detailSource } from "./detail";

import { source } from "./default";

const meta = {
    title: "Components/CheckboxOne",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component: "The CheckboxOne is a deprecated component, it returns Radio component.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source },
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
