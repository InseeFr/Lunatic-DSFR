import { source, data } from "./default";
import defaultArgTypes from "../utils/default-arg-types";
import type { StoryObj, Meta } from "@storybook/react";
import { Orchestrator } from "stories/utils/Orchestrator";

const meta = {
    title: "Components/Summary",
    component: Orchestrator,
    argTypes: defaultArgTypes,
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source, data },
} satisfies Story;
