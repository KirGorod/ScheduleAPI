import React from 'react';
import { IDay } from 'src/type';
interface IInputPicker {
    placeholder?: string;
    type: string;
    local: string;
    handelComponentVisible: (foreClose?: boolean) => void;
    onChange: (date: any) => void;
    clearBtn?: boolean;
    withTime?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    fromLabel?: string;
    toLabel?: string;
    inputClass?: string;
    clearBtnClass?: string;
    maxDate: IDay | null | undefined;
    showTimeInput?: boolean;
    inputId?: string;
}
declare const InputPicker: React.ForwardRefExoticComponent<IInputPicker & React.RefAttributes<HTMLInputElement>>;
export default InputPicker;
