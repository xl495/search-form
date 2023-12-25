<template>
  <el-form ref="searchRef" class="m-search-model-form" :size="props.size" :model="_fields" :label-width="labelWidth"
    :label-position="props.labelPosition">
    <el-row :gutter="Number(props.rowGutter)" type="flex" :justify="props.rowJustify">
      <el-col v-for="(item, key) in _fields" :key="key" :span="item.isHidden ? 0 : Number(props.rowSpan)">
        <template v-if="isEmpty(item.isHidden) || item.isHidden === false">
          <el-form-item v-if="item.inputType === IType.Input" :label="item.label" :label-width="item.labelWidth">
            <el-input v-model="_fields[key].value" v-bind="item.attr" :placeholder="item.placeholder || '请输入'" clearable
              v-on="item.event" />
          </el-form-item>
          <el-form-item v-else-if="item.inputType === IType.Select" :label="item.label" :label-width="item.labelWidth">
            <el-select v-model="_fields[key].value" :placeholder="item.placeholder || '请选择'" v-bind="item.attr" clearable
              v-on="item.event">
              <el-option v-for="(select, ISelect) in item.options" :key="ISelect" :label="select.label"
                :value="select.value" :disabled="select?.disabled === true" />
            </el-select>
          </el-form-item>
          <el-form-item v-else-if="item.inputType === IType.Date || item.inputType === IType.Daterange
            " :label="item.label" :label-width="item.labelWidth">
            <el-date-picker v-model="_fields[key].value" style="--el-date-editor-daterange-width: 100%"
              :type="item.inputType === IType.Date ? 'date' : 'daterange'" :placeholder="item.placeholder || '请选择'"
              :value-format="item.valueFormat || 'YYYY-MM-DDTHH:mm:ss.sssZ'"
              :shortcuts="item.inputType === IType.Daterange ? shortcuts : []" v-bind="item.attr" clearable
              v-on="item.event" />
          </el-form-item>
          <el-form-item v-else-if="item.inputType === IType.DateTime || item.inputType === IType.Datetimerange
            " :label="item.label" :label-width="item.labelWidth">
            <el-date-picker v-model="_fields[key].value"
              :type="item.inputType === IType.DateTime ? 'datetime' : 'datetimerange'"
              :placeholder="item.placeholder || '请选择'" :value-format="item.valueFormat || 'YYYY-MM-DDTHH:mm:ss.sssZ'"
              :shortcuts="item.inputType === IType.Datetimerange ? shortcuts : []" v-bind="item.attr" clearable
              v-on="item.event" />
          </el-form-item>
        </template>
      </el-col>
      <el-col class="m-search-model-last" :span="getToolRow() || Number(props.rowSpan)">
        <el-form-item :class="['el-form-item-last', props.expand.classes]" :style="props.expand.style">
          <el-button :style="{ 'min-width': props.expand?.minWidth || '6.25rem' }" @click="onReset">重置</el-button>
          <el-button type="primary" :style="{ 'min-width': props.expand?.minWidth || '6.25rem' }"
            :loading="isSearchLoading" @click="onSubmit">查询</el-button>
          <el-button v-if="props.expand.isExport" :loading="props.expand.isExportLoading" type="primary"
            :style="{ 'min-width': props.expand?.minWidth || '6.25rem' }" @click="onExport">导出</el-button>
          <slot name="button-group" />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, effect, inject } from "vue";
import dayjs from "dayjs";
import { IField, IFieldEvent, IFieldEventValue, IType, IExpand, IOptions } from "../types/index";
import {
  ElForm,
  ElFormItem,
  ElRow,
  ElInput,
  ElOption,
  ElCol,
  ElSelect,
  ElDatePicker,
  ElButton,
} from "element-plus";

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

const props = withDefaults(defineProps<IProps>(), {
  fields(): IField {
    return {};
  },
  labelWidth: "70px",
  isSearchLoading: false,
  rowJustify: "start",
  rowGutter: 10,
  labelPosition: "left",
  rowSpan: 8,
  size: "default",
  expand(): IExpand {
    return {
      classes: "",
      style: ``,
      isExport: false,
      isExportLoading: false,
      minWidth: "6.25rem",
    };
  },
  isAutoSubmit: false,
});

const emits = defineEmits(["onSubmit", "export", "reset"]);

const _fields = ref<IField>(props.fields);

const _fieldsDefaultValue = ref<Record<string, string | number | string[] | number[]>>({});

const fetchOptionsMethod = inject<(...rest: any) => Promise<IOptions[]>>('mSearchFormFetchOptions',
  () => Promise.resolve([]))

const isEmpty = (value: any) => {
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

  if (value === 0) {
    return true;
  }

  return false;
};

const searchRef = ref();

const isSearchLoading = ref(false);

const initDefault = () => {
  for (const key in props.fields) {
    const element: IFieldEvent = props.fields[key];
    _fieldsDefaultValue.value[key] = element.value;
    // 封装 Select 获取方法
    if (element.inputType === IType.Select && element.optionsKey) {
      // 如果存在 Url
      let options: IOptions[] = [];
      if (Array.isArray(element?.options)) {
        options.push(...element?.options);
      }
    }
    element.getOptionforKey = element.getOptionforKey = (
      value: string | number
    ): IOptions => {
      // 不存在值 直接返回 一个空对象 防止取不到值 报错
      if ([undefined, null].includes((value as unknown) as null | undefined)) {
        return {
          value: "-",
          label: "-",
        };
      }
      const findData: IOptions | undefined = (element.options as IOptions[]).find(
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
    };
    element.getOptionLabelForKey = (value: string | number) => element?.getOptionforKey && element?.getOptionforKey(value)?.label || ''

    if (element.optionsKey && (typeof fetchOptionsMethod === 'function' || typeof element.fetchOptionsMethod === 'function')) {
      element.attr.loading = true
      const method = typeof element.fetchOptionsMethod === 'function' ? element.fetchOptionsMethod : fetchOptionsMethod
      method(element.optionsKey).then((res: any) => {
        element.options = res;
      }).catch((err: any) => {
        throw new Error(err)
      }).finally(() => {
        element.attr.loading = false
      })
    }
  }
};

initDefault();

effect(() => {
  isSearchLoading.value = props.isSearchLoading;
});

// 获取当前搜索条件
const getSearchData = () => {
  const searchData: Record<string, any> = {};
  for (const key in _fields.value) {
    const item = _fields.value[key]
    if (Object.prototype.hasOwnProperty.call(_fields.value, key)) {
      const value: IFieldEventValue = item.value;
      if (
        !isEmpty(value) &&
        ["createdAt", "updatedAt"].includes(key) &&
        Array.isArray(value) &&
        value.length
      ) {
        // 把查询开始时间设置为 00:00:00
        // 把查询结束时间设置为 23:59:59
        searchData[key] = [
          dayjs(value[0]).format("YYYY-MM-DDT00:00:00.sssZ"),
          dayjs(value[1]).format("YYYY-MM-DDT23:59:59.sssZ"),
        ];
      } else if (value instanceof Array) {
        if (value.length !== 0) searchData[key] = value;
      } else if (!isEmpty(value)) {
        searchData[key] = value;
      }
    }
  }
  return searchData;
};

// 搜索条件提交
const onSubmit = () => {
  emits("onSubmit", getSearchData());
};

// 导出
const onExport = () => {
  emits("export", getSearchData());
};

// 工具栏沾满当前行剩余空间
const getToolRow = () => {
  const colNumber = 24 / Number(props.rowSpan);
  let colSpan = 0;
  if (Object.keys(_fields.value).length % colNumber === 0) {
    colSpan = 24;
  } else {
    colSpan = 24 - (Object.keys(_fields.value).length % colNumber) * Number(props.rowSpan);
  }
  return colSpan;
};

// 重置
const onReset = () => {
  for (const key in _fields.value) {
    const element: IFieldEvent = _fields.value[key];
    element && (element.value = _fieldsDefaultValue.value[key]);
  }

  onSubmit();
};

const shortcuts = [
  {
    text: "最近一周",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "最近一个月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "最近三个月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];

defineExpose({
  getSearchData,
  fetchOptionsMethod
});
</script>

<style lang="scss">
.m-search-model-form {

  .el-select,
  .el-date-editor {
    width: 100%;
  }

  .el-form-item {
    margin-bottom: 26px;

    &.el-form-item-last {
      .el-form-item__content {
        margin-left: 0 !important;
      }
    }
  }

  .m-search-model-last {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
