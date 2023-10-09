import Orchestrator from "../utils/Orchestrator";
import { StoryObj, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import * as custom from "../..";
import source from "./source.json";

const meta: Meta<typeof Orchestrator> = {
    title: "Test/Paste",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    args: {
        source: source,
        custom,
    },
    parameters: {
        docs: {
            description: {
                story: "You can paste your questionnaire here to test it.",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {};
