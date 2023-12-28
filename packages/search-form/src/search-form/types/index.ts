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

export type IGetOptionLabelForKey = (optionsValue: string | number) => string;

export type IFetchDict = Promise<IOptions[]>

export type IFieldEventValue = number | string | string[] | number[];

export type ITransformOptions = (options?: IOptions[]) => IOptions[];


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
  transformOptions?: ITransformOptions;
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
