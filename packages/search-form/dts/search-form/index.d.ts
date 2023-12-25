export type { IOptions, IGetOptionforKey, IFieldEventValue, IFieldEvent, IField, IExpand, } from "./types/index";
export { IType } from "./types/index";
import type { App } from "vue";
export declare const SearchForm: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            fields?: import("./types/index").IField | undefined;
            labelWidth?: string | number | undefined;
            isSearchLoading?: boolean | undefined;
            rowJustify?: "start" | "center" | "space-around" | "space-between" | "end" | undefined;
            rowGutter?: string | number | undefined;
            labelPosition?: "left" | "right" | "top" | undefined;
            rowSpan?: string | number | undefined;
            size?: "default" | "large" | "small" | undefined;
            expand?: import("./types/index").IExpand | undefined;
            isAutoSubmit?: boolean | undefined;
            onOnSubmit?: ((...args: any[]) => any) | undefined;
            onExport?: ((...args: any[]) => any) | undefined;
            onReset?: ((...args: any[]) => any) | undefined;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            style?: unknown;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "onSubmit", ...args: any[]) => void) & ((event: "export", ...args: any[]) => void) & ((event: "reset", ...args: any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            fields: {
                type: import("vue").PropType<import("./types/index").IField>;
                required: true;
                default: () => import("./types/index").IField;
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
                type: import("vue").PropType<import("./types/index").IExpand>;
                default: () => import("./types/index").IExpand;
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
            getSearchData: () => Record<string, any>;
            fetchOptionsMethod: (...rest: any) => Promise<import("./types/index").IOptions[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            onSubmit: (...args: any[]) => void;
            export: (...args: any[]) => void;
            reset: (...args: any[]) => void;
        }, string, {
            fields: import("./types/index").IField;
            labelWidth: string | number;
            isSearchLoading: boolean;
            rowJustify: "start" | "center" | "space-around" | "space-between" | "end";
            rowGutter: string | number;
            labelPosition: "left" | "right" | "top";
            rowSpan: string | number;
            size: "default" | "large" | "small";
            expand: import("./types/index").IExpand;
            isAutoSubmit: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        fields: {
            type: import("vue").PropType<import("./types/index").IField>;
            required: true;
            default: () => import("./types/index").IField;
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
            type: import("vue").PropType<import("./types/index").IExpand>;
            default: () => import("./types/index").IExpand;
        };
        isAutoSubmit: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & {
        onOnSubmit?: ((...args: any[]) => any) | undefined;
        onExport?: ((...args: any[]) => any) | undefined;
        onReset?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        getSearchData: () => Record<string, any>;
        fetchOptionsMethod: (...rest: any) => Promise<import("./types/index").IOptions[]>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    fields: {
        type: import("vue").PropType<import("./types/index").IField>;
        required: true;
        default: () => import("./types/index").IField;
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
        type: import("vue").PropType<import("./types/index").IExpand>;
        default: () => import("./types/index").IExpand;
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
    getSearchData: () => Record<string, any>;
    fetchOptionsMethod: (...rest: any) => Promise<import("./types/index").IOptions[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onSubmit: (...args: any[]) => void;
    export: (...args: any[]) => void;
    reset: (...args: any[]) => void;
}, string, {
    fields: import("./types/index").IField;
    labelWidth: string | number;
    isSearchLoading: boolean;
    rowJustify: "start" | "center" | "space-around" | "space-between" | "end";
    rowGutter: string | number;
    labelPosition: "left" | "right" | "top";
    rowSpan: string | number;
    size: "default" | "large" | "small";
    expand: import("./types/index").IExpand;
    isAutoSubmit: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        "button-group"?(_: {}): any;
    };
}) & {
    install: (app: App, options: any) => void;
};
export default SearchForm;
