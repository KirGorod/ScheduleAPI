import React from 'react';
import { IDay, IRange } from 'src/type';
interface ISelectedDayProvider {
    type: string;
    initState?: IDay | IRange | IDay[] | null | undefined;
    children: React.ReactElement | React.ReactElement[];
}
declare function SelectedDaysProvider({ type, children, initState }: ISelectedDayProvider): JSX.Element;
declare function useSelectedDayState(): IDay | IRange | IDay[] | null | undefined;
declare function useSetSelectedDayState(): React.Dispatch<React.SetStateAction<IDay | IDay[] | null | undefined>>;
declare function useSelectedDayActions(): {
    changeSelectedDay: (newValue: any) => void;
    changeSelectedDayRange: (field: string, newValue: IDay | null | undefined) => void;
    removeSelectedDay: () => void;
    changeSelectedDayMulti: (newValue: IDay | null | undefined) => void;
    removeSelectedDayMulti: (newValue: IDay | null | undefined) => void;
    removeAllSelectedDayMulti: () => void;
};
export { useSelectedDayState, useSetSelectedDayState, useSelectedDayActions };
export default SelectedDaysProvider;
