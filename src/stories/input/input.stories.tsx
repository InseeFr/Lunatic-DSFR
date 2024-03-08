import { Orchestrator } from "stories/utils/Orchestrator";
import { source } from "./default";
import type { StoryObj, Meta } from "@storybook/react";

import defaultArgTypes from "../utils/default-arg-types";

const meta = {
    title: "Components/Input",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component should be used when you want the user to enter a string. You can add a maxLength property if you want to restrict the number of characters the user can enter.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {
    args: { source: source },
};
