import { IField, IExpand, IOptions } from "../types/index";
type IProps = {
    fields: IField;
    labelWidth?: string | number;
    isSearchLoading?: boolean;
    rowJustify?: "start" | "center" | "space-around" | "space-between" | "end";
    rowGutter?: string | number;
    labelPosition?: "left" | "right" | "top";
    rowSpan?: string | number;
    size?: "large" | "default" | "small";
    expand?: IExpand;
    isAutoSubmit?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IProps>, {
    fields(): IField;
    labelWidth: string;
    isSearchLoading: boolean;
    rowJustify: string;
    rowGutter: number;
    labelPosition: string;
    rowSpan: number;
    size: string;
    expand(): IExpand;
    isAutoSubmit: boolean;
}>, {
    getSearchData: () => Record<string, any>;
    fetchOptionsMethod: (...rest: any) => Promise<IOptions[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onSubmit: (...args: any[]) => void;
    export: (...args: any[]) => void;
    reset: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IProps>, {
    fields(): IField;
    labelWidth: string;
    isSearchLoading: boolean;
    rowJustify: string;
    rowGutter: number;
    labelPosition: string;
    rowSpan: number;
    size: string;
    expand(): IExpand;
    isAutoSubmit: boolean;
}>>> & {
    onOnSubmit?: ((...args: any[]) => any) | undefined;
    onExport?: ((...args: any[]) => any) | undefined;
    onReset?: ((...args: any[]) => any) | undefined;
}, {
    fields: IField;
    labelWidth: string | number;
    isSearchLoading: boolean;
    rowJustify: "start" | "center" | "space-around" | "space-between" | "end";
    rowGutter: string | number;
    labelPosition: "left" | "right" | "top";
    rowSpan: string | number;
    size: "default" | "large" | "small";
    expand: IExpand;
    isAutoSubmit: boolean;
}, {}>, {
    "button-group"?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
