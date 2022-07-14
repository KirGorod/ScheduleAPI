import React from 'react';
import { ITime, ITimeRange } from 'src/type';
interface ISelectedTimeProvider {
    type?: string;
    initState?: ITime | ITimeRange | null;
    children: React.ReactElement | React.ReactElement[];
}
declare function SelectedTimeProvider({ children, initState }: ISelectedTimeProvider): JSX.Element;
declare function useSelectedTimeState(): ITime | ITimeRange | null | undefined;
declare function useSetSelectedTimeState(): React.Dispatch<React.SetStateAction<ITime>>;
declare function useSelectedTimeActions(): {
    changeSelectedTime: (newValue: any) => void;
    changeSelectedTimeRange: (field: string, newValue: ITime | null | undefined) => void;
};
export { useSelectedTimeState, useSetSelectedTimeState, useSelectedTimeActions };
export default SelectedTimeProvider;
