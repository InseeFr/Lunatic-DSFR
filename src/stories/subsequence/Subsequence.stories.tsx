import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import type { Meta, StoryFn } from "@storybook/react";

import defaultArgTypes from "../utils/default-arg-types";

const stories = {
    title: "Orchestrated Components/Subsequence",
    component: Orchestrator,
    argTypes: defaultArgTypes,
} as Meta<typeof Orchestrator>;

export default stories;

const Template: StoryFn<typeof Orchestrator> = args => <Orchestrator {...args} />;

export const Default = Template.bind({});

Default.args = { id: "sequence", source };
