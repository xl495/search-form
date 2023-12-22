import { IField, IExpand, IOptions } from "../types/index";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    fields: {
        type: import("vue").PropType<IField>;
        required: true;
        default: () => IField;
    };
    labelWidth: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    isSearchLoading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    rowJustify: {
        type: import("vue").PropType<"start" | "center" | "space-around" | "space-between" | "end">;
        default: string;
    };
    rowGutter: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    labelPosition: {
        type: import("vue").PropType<"left" | "right" | "top">;
        default: string;
    };
    rowSpan: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    size: {
        type: import("vue").PropType<"default" | "large" | "small">;
        default: string;
    };
    expand: {
        type: import("vue").PropType<IExpand>;
        default: () => IExpand;
    };
    isAutoSubmit: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {
    getSearchData: () => Record<string, any>;
    fetchOptionsMethod: (...rest: any) => Promise<IOptions[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onSubmit" | "export" | "reset")[], "onSubmit" | "export" | "reset", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fields: {
        type: import("vue").PropType<IField>;
        required: true;
        default: () => IField;
    };
    labelWidth: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    isSearchLoading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    rowJustify: {
        type: import("vue").PropType<"start" | "center" | "space-around" | "space-between" | "end">;
        default: string;
    };
    rowGutter: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    labelPosition: {
        type: import("vue").PropType<"left" | "right" | "top">;
        default: string;
    };
    rowSpan: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    size: {
        type: import("vue").PropType<"default" | "large" | "small">;
        default: string;
    };
    expand: {
        type: import("vue").PropType<IExpand>;
        default: () => IExpand;
    };
    isAutoSubmit: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
