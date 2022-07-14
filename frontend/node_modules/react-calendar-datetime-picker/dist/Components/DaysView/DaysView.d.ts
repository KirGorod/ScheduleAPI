import React from 'react';
import { IDay } from 'src/type';
interface IDaysProps {
    local: string;
    type?: string;
    showWeekend: boolean;
    daysClass?: string;
    disabledDates?: IDay[];
    handelComponentVisible?: (foreClose?: boolean) => void;
}
declare const _default: React.NamedExoticComponent<IDaysProps>;
export default _default;
