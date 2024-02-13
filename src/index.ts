import { Suggester } from "Suggester/Suggester";
import { Button } from "./Button";
import { CheckboxGroup } from "./CheckboxGroup";
import { Datepicker } from "./Datepicker";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";
import { InputNumber } from "./InputNumber";
import { Radio } from "./Radio";
import { Roundabout } from "./Roundabout";
import { ComponentSet } from "./ComponentSet";
import { QuestionContext } from "./Questions";
import { QuestionExplication } from "./QuestionExplication";
import { Sequence } from "./Sequence";
import { Subsequence } from "./Subsequence";
import { SummaryResponses, SummaryTitle } from "./Summary";
import { Modal } from "./Modal";

export const customComponent = {
    Button,
    Dropdown,
    Input,
    InputNumber,
    CheckboxGroup,
    Radio,
    Datepicker,
    Suggester,
    Roundabout,
    ComponentSet,
    QuestionContext,
    QuestionExplication,
    Sequence,
    Subsequence,
    SummaryResponses,
    SummaryTitle,
    Modal,
};

//To ensure retrocompatibility but should not be used for the future
export default customComponent;
