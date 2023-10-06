import React from "react";
import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import data from "./data.json";
import defaultArgTypes from "../utils/default-arg-types";
import * as custom from "../..";

const stories = {
    title: "OrchestratedComponents/Summary",
    component: Orchestrator,
    argTypes: defaultArgTypes,
};

export default stories;

const Template = args => <Orchestrator {...args} custom={custom} />;
export const Default = Template.bind({});

Default.args = {
    id: "Summary",
    source,
    data,
    pagination: true,
};
