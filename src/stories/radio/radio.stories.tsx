import { Orchestrator } from "stories/utils/Orchestrator";
import { source } from "./default";
import type { StoryObj, Meta } from "@storybook/react";

import defaultArgTypes from "../utils/default-arg-types";

const meta: Meta<typeof Orchestrator> = {
    title: "Components/Radio",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component should be used if you want the user to select only one option in a list of options.",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {
    args: { source: source },
};
