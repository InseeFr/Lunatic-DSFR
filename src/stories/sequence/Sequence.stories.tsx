import { Orchestrator } from "stories/utils/Orchestrator";
import { source } from "./default";
import type { Meta, StoryObj } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";

const meta = {
    title: "Components/Sequence",
    component: Orchestrator,
    argTypes: defaultArgTypes,
} as Meta<typeof Orchestrator>;

export default meta;
type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source },
} satisfies Story;
