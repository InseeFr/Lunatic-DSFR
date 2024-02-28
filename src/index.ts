import {
    Suggester,
    ComboboxLabelSelection,
    ComboboxInput,
    ComboboxOption,
    ComboboxClearButton,
    Label,
    ComboboxContentBox,
    ComboboxContainer,
    ComboboxPanelContainer,
    SuggesterNotification,
} from "Suggester";
import { Button } from "./Button";
import { CheckboxGroup } from "./CheckboxGroup";
import { Datepicker } from "./Datepicker";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";
import { InputNumber } from "./InputNumber";
import { Radio } from "./Radio";
import { Roundabout } from "./Roundabout";
import { ComponentSet, ComponentSetWrapper } from "./ComponentSet";
import { QuestionContext, QuestionInformation, QuestionExplication } from "./Questions";
import { Sequence } from "./Sequence";
import { Subsequence } from "./Subsequence";
import { SummaryResponses, SummaryTitle } from "./Summary";
import { Modal } from "./Modal";
import type { FunctionComponent } from "react";
import { Textarea } from "Textarea";

type Custom = Record<string, FunctionComponent<unknown>>;

export const customComponents = {
    Suggester,
    ComboboxLabelSelection,
    ComboboxInput,
    ComboboxOption,
    ComboboxClearButton,
    Label,
    ComboboxContentBox,
    ComboboxContainer,
    ComboboxPanelContainer,
    SuggesterNotification,
    Button,
    Dropdown,
    Input,
    InputNumber,
    CheckboxGroup,
    Radio,
    Datepicker,
    Roundabout,
    ComponentSet,
    ComponentSetWrapper,
    QuestionContext,
    QuestionInformation,
    QuestionExplication,
    Sequence,
    Subsequence,
    SummaryResponses,
    SummaryTitle,
    Modal,
    Textarea,
} as Custom;

//To ensure retrocompatibility but should not be used for the future
export default customComponents;
