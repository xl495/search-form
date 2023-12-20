import { HTMLAttributes } from 'vue'
export enum IType {
  Input,
  Select,
  Date,
  Daterange,
  DateTime,
  Datetimerange
}

export type IOptions = {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export type IGetOptionforKey = (optionsValue: string | number) => IOptions;

export type IFieldEventValue = number | string | string[] | number[];

export type IFieldEvent = {
  label: string;
  labelWidth?: string | number;
  value: IFieldEventValue;
  placeholder?: string;
  key: string;
  inputType: IType;
  event: Event | {};
  attr: HTMLAttributes | any;
  options?: IOptions[] | null;
  optionsKey?: string;
  getOptionforKey?: IGetOptionforKey;
  format?: string;
  valueFormat?: string;
  isHidden?: boolean, // 是否隐藏
}

export type IField = Record<string, IFieldEvent>;

export type IExpand = {
  isExport?: boolean;
  isExportLoading?: boolean;
  classes?: string | '';
  style?: string | HTMLStyleElement,
  minWidth?: string
}
