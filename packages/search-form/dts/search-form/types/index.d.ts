import { HTMLAttributes } from 'vue';
export declare enum IType {
    Input = 0,
    Select = 1,
    Date = 2,
    Daterange = 3,
    DateTime = 4,
    Datetimerange = 5
}
export type IOptions = {
    label: string;
    value: string | number;
    disabled?: boolean;
};
export type IGetOptionforKey = (optionsValue: string | number) => IOptions;
export type IGetOptionLabelForKey = (optionsValue: string | number) => string;
export type IFetchDict = (optionsValue?: string) => Promise<IOptions[]>;
export type IFieldEventValue = number | string | string[] | number[];
export type IFieldEvent = {
    label: string;
    labelWidth?: string | number;
    value: IFieldEventValue;
    placeholder?: string;
    inputType: IType;
    event: Event | {};
    attr: HTMLAttributes | any;
    options?: IOptions[] | null;
    optionsKey?: string;
    getOptionforKey?: IGetOptionforKey;
    getOptionLabelForKey?: IGetOptionLabelForKey;
    valueFormat?: string;
    fetchOptionsMethod?: IFetchDict;
    isHidden?: boolean;
};
export type IField = Record<string, IFieldEvent>;
export type IExpand = {
    isExport?: boolean;
    isExportLoading?: boolean;
    classes?: string | '';
    style?: string | HTMLStyleElement;
    minWidth?: string;
};