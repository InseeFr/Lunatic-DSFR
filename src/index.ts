import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { Suggester } from "Suggester";
import { Button } from "./Button";
import { CheckboxGroup } from "./CheckboxGroup";
import { Datepicker } from "./Datepicker";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";
import { InputNumber } from "./InputNumber";
import { Roundabout } from "./Roundabout";
import { Sequence } from "./Sequence";
import { Subsequence } from "./Subsequence";
import { SummaryResponses, SummaryTitle } from "./Summary";
import { Textarea } from "Textarea";
import { CheckboxBoolean } from "CheckboxBoolean";
import { RadioGroup } from "RadioGroup";
import { Declarations } from "Declarations";

export const customComponents = {
    Suggester,
    Button,
    Dropdown,
    Input,
    InputNumber,
    CheckboxGroup,
    CheckboxBoolean,
    RadioGroup,
    Datepicker,
    Roundabout,
    Sequence,
    Subsequence,
    SummaryResponses,
    SummaryTitle,
    Textarea,
    Declarations,
} as Partial<LunaticSlotComponents>;
