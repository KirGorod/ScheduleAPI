import { IDay, IRange, ITime, ITimeRange } from 'src/type';
export declare const getNumberOfDaysInMonth: (year: number, month: number, local?: string | undefined) => number;
export declare const genFullDay: (year: number, month: number, day: number) => string;
export declare const genFullIDay: (date: IDay | null | undefined, isCorrectMonth?: boolean, withTime?: boolean | undefined, showTimeInput?: boolean | undefined, time?: ITime | null | undefined) => string;
export declare const genDayObject: (year: number, month: number, day: number) => {
    year: number;
    month: number;
    day: number;
};
export declare const getWeekday: (number: number, local: string) => {
    weekDay: any;
    weekDayIndex: any;
};
export declare const getDateTimeStamp: (date: IDay, local?: string | undefined) => number;
export declare const compareDateEN: (date1: IDay, date2: IDay) => 1 | 0 | 2;
export declare const compareDateFA: (date1: IDay, date2: IDay) => 1 | 0 | 2;
export declare const handelInitialValues: (initValue: any, correctedType: string, local: string, maxDate?: IDay | undefined, minDate?: IDay | undefined) => {
    initCalender: {
        year: any;
        month: any;
        day: any;
    };
    initTime: {
        from: {
            hour: any;
            minute: any;
        };
        to: {
            hour: any;
            minute: any;
        };
        hour?: undefined;
        minute?: undefined;
    } | {
        hour: any;
        minute: any;
        from?: undefined;
        to?: undefined;
    } | undefined;
};
export declare const mergeProviders: (onChange: (date: any) => void, type: string, selectedDate: IDay | IRange | IDay[] | null | undefined, selectedTime: ITime | ITimeRange | null | undefined, onCalenderChange?: any, withTime?: boolean | undefined) => void;
export declare const addZero: (number: number) => string | number;
export declare const isDayBetween: (min: IDay, day: IDay, max: IDay, local: string) => boolean;
export declare const checkInputValues: (initValue: any, correctedLocal: string, correctedType: string, maxDate?: IDay | undefined, minDate?: IDay | undefined, disabledDates?: IDay[] | undefined) => void;
export declare const fixedMonth: (date: IDay | undefined, act?: string | undefined) => IDay | undefined;
export declare const fixedMonthInitValue: (initDate: any, type: string) => any;
export declare const fixedMonthInitValuePos: (initDate: any, type: string) => any;
export declare const toPersianNumber: (englishNumber: number | string) => string;
export declare const isNotUndefined: (value: any, alternativeValue: any) => any;
