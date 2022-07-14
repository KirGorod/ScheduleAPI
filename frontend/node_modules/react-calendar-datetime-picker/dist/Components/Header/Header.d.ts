import React from 'react';
interface IHeaderProps {
    local: string;
    NextBtnIcon?: any;
    PreviousBtnIcon?: any;
    nextMonthBtnTitle?: string;
    previousMonthBtnTitle?: string;
    headerClass?: string;
    autoClose?: boolean;
    handelComponentVisible?: (foreClose?: boolean) => void;
}
declare const _default: React.NamedExoticComponent<IHeaderProps>;
export default _default;
