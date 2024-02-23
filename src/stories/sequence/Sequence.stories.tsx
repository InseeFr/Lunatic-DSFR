import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import type { StoryFn, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";

const stories = {
    title: "Orchestrated Components/Sequence",
    component: Orchestrator,
    argTypes: defaultArgTypes,
} as Meta<typeof Orchestrator>;

export default stories;

const Template: StoryFn<typeof Orchestrator> = args => <Orchestrator {...args} />;

export const Skeleton = Template.bind({});

Skeleton.args = { id: "sequence", source };
