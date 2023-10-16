import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import { StoryFn, Meta } from "@storybook/react";
import defaultArgTypes from "../utils/default-arg-types";
import * as custom from "../..";

const stories = {
    title: "OrchestratedComponents/Subsequence",
    component: Orchestrator,
    argTypes: defaultArgTypes,
} as Meta<typeof Orchestrator>;

export default stories;

const Template: StoryFn<typeof Orchestrator> = args => <Orchestrator {...args} custom={custom} />;

export const Default = Template.bind({});

Default.args = { id: "sequence", source };
