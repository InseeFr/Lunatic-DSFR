import React from "react";
import defaultArgTypes from "../utils/default-arg-types";
import Orchestrator from "../utils/Orchestrator";
import source from "./source.json";
import * as custom from "../..";

// eslint-disable-next-line no-undef
console.log(custom);

const stories = {
    title: "Components/Modal",
    component: Orchestrator,
    argTypes: defaultArgTypes,
};

export default stories;

const Template = args => <Orchestrator {...args} custom={custom} />;
export const Default = Template.bind({});

Default.args = { id: "modal", source };
