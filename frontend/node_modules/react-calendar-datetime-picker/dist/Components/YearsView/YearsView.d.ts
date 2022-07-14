import { FC } from 'react';
import { calendarListStyle } from 'src/type';
interface IYearsProps {
    local: string;
    yearsClass?: string;
    yearListStyle?: calendarListStyle;
}
declare const years: FC<IYearsProps>;
export default years;
