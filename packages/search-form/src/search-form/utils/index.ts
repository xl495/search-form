import { computed } from "vue";
import { IField, IFieldEvent, IOptions, IType } from "../types/index";

export const isEmpty = (value: any) => {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === "string" && value.trim() === "") {
        return true;
    }

    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    if (typeof value === "object" && Object.keys(value).length === 0) {
        return true;
    }

    return false;
};

export const initDefaultRow = (field: IFieldEvent) => {
    if (field.inputType === IType.Select) {

        const getDictValue = (optionsValue: IOptions[], value: string | number): IOptions => {
            const options = computed<IOptions[]>(() => optionsValue || [])
            // 不存在值 直接返回 一个空对象 防止取不到值 报错
            if ([undefined, null].includes((value as unknown) as null | undefined)) {
                return {
                    value: "-",
                    label: "-",
                };
            }
            const findData: IOptions | undefined = options.value.find(
                (item) => {
                    return item.value === value;
                }
            );

            if (!findData) {
                return {
                    value: "-",
                    label: "-",
                };
            }

            return findData;
        }

        field.getOptionforKey = field.getOptionforKey = (value: string | number) => getDictValue(field.options as IOptions[], value)
        field.getOptionLabelForKey = (value: string | number) => getDictValue(field.options as IOptions[], value).label
    }
}

export const initDefaultData = (fields: IField): IField => {
    for (const key in fields) {
        const element: IFieldEvent = fields[key];
        initDefaultRow(element)
    }
    return fields
}