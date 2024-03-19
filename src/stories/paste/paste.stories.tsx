import { Orchestrator } from "../utils/Orchestrator";
import type { StoryObj, Meta } from "@storybook/react";
import { source, data } from "./default";

const meta = {
    title: "Test/Paste",
    component: Orchestrator,
    parameters: {
        controls: { include: ["initialPage", "source", "data", "autoSuggesterLoading"] },
        docs: {
            description: {
                component: "You can paste your questionnaire here to test it.",
            },
        },
    },
    argTypes: {
        initialPage: {
            table: { disable: false },
        },
        autoSuggesterLoading: {
            table: { disable: false },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: {
        source,
        data,
    },
} satisfies Story;
