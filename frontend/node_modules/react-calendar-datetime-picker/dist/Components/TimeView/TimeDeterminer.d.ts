import React from 'react';
import { calendarLocal, calendarType } from 'src/type';
interface ITimDeterminerProps {
    clockFromLabel?: string;
    clockToLabel?: string;
    clockLabel?: string;
    type: calendarType;
    timeClass?: string;
    local: calendarLocal;
    currentView: string;
}
declare const _default: React.NamedExoticComponent<ITimDeterminerProps>;
export default _default;
