import { FC } from 'react';
interface ITimeViewProps {
    initHour: number | undefined;
    initMinute: number | undefined;
    timeFor?: string;
    timeLabel?: string;
    timeClass?: string;
}
declare const TimeView: FC<ITimeViewProps>;
export default TimeView;
