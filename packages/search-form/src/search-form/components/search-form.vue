<template>
  <el-form ref="searchRef" class="m-search-model-form" :class="{ 'add-hide': expandOptions?.isExpand }"
    :size="props.size" :model="_fields" :label-width="labelWidth" :label-position="props.labelPosition"
    @submit.native.prevent @submit="onSubmit">
    <div v-if="Object.keys(props.fields).length >= 4 && expandOptions?.isExpand" class="hide-wrap" :class="{
      'hide-wrap-active': isExpandHidden,
    }" @click="handleHide">
      <el-icon class="hide-icon">
        <ArrowDownBold />
      </el-icon>
    </div>
    <el-row :gutter="Number(props.rowGutter)" type="flex" :justify="props.rowJustify">
      <el-col v-for="(item, key) in _fields" :key="key"
        :md="item.isHidden || isExpandHidden && !item?.isExpandHiddenShow ? 0 : Number(props.rowSpan)"
        :style="{ order: isExpandHidden && item?.isExpandHiddenShow ? item.expandHiddenOrder : item.order }">
        <template
          v-if="(isEmpty(item.isHidden) || item.isHidden === false) && (isExpandHidden && item?.isExpandHiddenShow || !isExpandHidden)">
          <el-form-item v-if="item.inputType === IType.Input" :label="item.label" :label-width="item.labelWidth">
            <el-input v-model="_fields[key].value" @blur="blurInputText(_fields[key])" v-bind="item.attr"
              :placeholder="item.placeholder || '请输入'" clearable v-on="item.event" />
          </el-form-item>
          <el-form-item v-else-if="item.inputType === IType.Select" :label="item.label" :label-width="item.labelWidth">
            <el-select popper-class="m-search-model-select-header" v-model="_fields[key].value"
              :placeholder="item.placeholder || '请选择'" v-bind="item.attr" clearable
              @change="e => selectChangeItem(e, _fields[key].options, _fields[key])" v-on="item.event">
              <template #header v-if="item.attr?.multiple">
                <el-checkbox v-model="_fields[key].checkAll" :indeterminate="_fields[key].indeterminate" @change="(value: CheckboxValueType) => {
                  if (_fields[key] && _fields[key]?.handleCheckAll) {
                    (_fields[key]!.handleCheckAll as Function)(value, _fields[key]);
                  }
                }">
                  All
                </el-checkbox>
              </template>
              <el-option v-for="(select, ISelect) in item.options" :key="ISelect" :label="select.label"
                :value="select.value" :disabled="select?.disabled === true" />
            </el-select>
          </el-form-item>
          <el-form-item v-else-if="
            item.inputType === IType.Date ||
            item.inputType === IType.Daterange
          " :label="item.label" :label-width="item.labelWidth">
            <el-date-picker v-model="_fields[key].value" style="--el-date-editor-daterange-width: 100%"
              :type="item.inputType === IType.Date ? 'date' : 'daterange'" :placeholder="item.placeholder || '请选择'"
              :value-format="item.valueFormat || 'YYYY-MM-DDTHH:mm:ss.sssZ'"
              :shortcuts="item.inputType === IType.Daterange ? shortcuts : []" v-bind="item.attr" clearable
              v-on="item.event" />
          </el-form-item>
          <el-form-item v-else-if="
            item.inputType === IType.DateTime ||
            item.inputType === IType.Datetimerange
          " :label="item.label" :label-width="item.labelWidth">
            <el-date-picker v-model="_fields[key].value" :type="item.inputType === IType.DateTime ? 'datetime' : 'datetimerange'
              " :placeholder="item.placeholder || '请选择'" :value-format="item.valueFormat || 'YYYY-MM-DDTHH:mm:ss.sssZ'"
              :shortcuts="item.inputType === IType.Datetimerange ? shortcuts : []
                " v-bind="item.attr" clearable v-on="item.event" />
          </el-form-item>
        </template>
      </el-col>
      <el-col class="m-search-model-last" :span="24">
        <el-form-item :class="['el-form-item-last', expandOptions.classes]" :style="expandOptions.style">
          <el-button :style="{ 'min-width': expandOptions?.minWidth || '6.25rem' }" @click="onReset">重置</el-button>
          <el-button type="primary" :style="{ 'min-width': expandOptions?.minWidth || '6.25rem' }"
            :loading="isSearchLoading" native-type="submit">查询</el-button>
          <el-button v-if="expandOptions.isExport" :loading="expandOptions.isExportLoading" type="primary"
            :style="{ 'min-width': expandOptions?.minWidth || '6.25rem' }" @click="onExport">导出</el-button>
          <slot name="button-group" />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, effect, inject, watch, WatchStopHandle, onUnmounted } from "vue";
import dayjs from "dayjs";
import {
  IField,
  IFieldEvent,
  IFieldEventValue,
  IType,
  IExpand,
  IOptions,
} from "../types/index";
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
  ElCheckbox,
  ElIcon,
  CheckboxValueType
} from "element-plus";
import ArrowDownBold from "./arrowDownBold.vue"
import { initDefaultRow, isEmpty } from "../utils";
import { debounce, isArray } from "radash";

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
      isExpand: true,
      isDefaultExpandHidden: false,
      minWidth: "6.25rem",
    };
  },
  isAutoSubmit: false,
});

const emits = defineEmits(["onSubmit", "export", "reset"]);

const _fields = ref<IField>(props.fields);

const _fieldsDefaultValue = ref<
  Record<string, string | number | string[] | number[]>
>({});

const _fieldsWatch = ref<Record<keyof typeof props.fields, WatchStopHandle>>({});

const fetchOptionsMethod = inject<(...rest: any) => Promise<IOptions[]>>(
  "mSearchFormFetchOptions",
  () => Promise.resolve([])
);

const searchRef = ref();

// 默认参数 避免传控空对象造成参数丢失
const expandOptions = ref<IExpand>({
  classes: "",
  style: ``,
  isExport: false,
  isExportLoading: false,
  isExpand: true,
  isDefaultExpandHidden: false,
  minWidth: "6.25rem",
  ...props.expand,
});

const isSearchLoading = ref(false);

const isExpandHidden = ref(false);

const propsDefaultHide = ref<
  Record<string, boolean>
>({});

const initDefault = async () => {
  // 防止传入空对象
  for (const key in props.fields) {
    const element: IFieldEvent = props.fields[key];
    propsDefaultHide.value[key] = !!element.isExpandHiddenShow;
    if (isEmpty(element.attr)) {
      Reflect.set(element, "attr", {});
    }
    if (isEmpty(element.event)) {
      Reflect.set(element, "event", {});
    }
    if (isEmpty(element.isInputTrim)) {
      Reflect.set(element, "isInputTrim", true);
    }
    if (isEmpty(element.order)) {
      Reflect.set(element, "order", 0);
    }
    if (isEmpty(element.expandHiddenOrder)) {
      Reflect.set(element, "expandHiddenOrder", 0);
    }
    if (isEmpty(element.checkAll)) {
      Reflect.set(element, "checkAll", false);
      if (element.value && element.options) {
        Reflect.set(element, "checkAll", element.options?.length === (element.value as (string | number)[])?.length );
      }
      if (isArray(element.value) && element.value?.length === 0 && isArray(element.options) && element.options.length === 0) {
        Reflect.set(element, "checkAll", false);
      }
    }
    if (isEmpty(element.indeterminate)) {
      Reflect.set(element, "indeterminate", false);
    }
    if (isEmpty(element.handleCheckAll)) {
      element.handleCheckAll = (value, element) => {
        if (value && element.options) {
          element.value = element.options?.map((item) => item.value as number);
          element.checkAll = true;
          element.indeterminate = false
        } else {
          element.value = [];
          element.checkAll = false;
          element.indeterminate = false
        }
      }
    }

    if (element.inputType === IType.Select && element.attr?.multiple) {
      // 是否存在监听
      if (_fieldsWatch.value[key]) {
        // 清除监听
        _fieldsWatch.value[key]();
      }
      // 监听
      const watchStop = watch(
        [
          () => _fields.value[key].value, 
          () => _fields.value[key].options,
        ],
        debounce({ delay: 300 }, ([value, options]) => {
          selectChangeItem(value, options, _fields.value[key]);
        }),
        {
          deep: true,
        }
      );
      _fieldsWatch.value[key] = watchStop;
    }

    _fieldsDefaultValue.value[key] = element.value as IFieldEventValue;
  }
  if (expandOptions.value.isExpand && expandOptions.value.isDefaultExpandHidden) {
    handleHide();
  }
  // 这一步处理网络请求可能绘耗时
  for (const key in props.fields) {
    const element: IFieldEvent = props.fields[key];
    // 封装 Select 获取方法
    if (
      element.inputType === IType.Select &&
      element.getOptionforKey === undefined
    ) {
      initDefaultRow(element);
    }
    if (element.inputType === IType.Select && element.optionsKey) {
      // 如果存在 Url
      let options: IOptions[] = [];
      if (Array.isArray(element?.options)) {
        options.push(...element?.options);
      }
    }
    if (
      element.optionsKey &&
      (typeof fetchOptionsMethod === "function" ||
        typeof element.fetchOptionsMethod === "function")
    ) {
      Reflect.set(element.attr, "loading", false);
      const method =
        typeof element.fetchOptionsMethod === "function"
          ? element.fetchOptionsMethod
          : fetchOptionsMethod;
      await method(element.optionsKey)
        .then((res: any) => {
          Reflect.set(element, "options", res);
          return {
            result: res,
            element: element,
          };
        })
        .then((res) => {
          if (
            element.transformOptions &&
            typeof element.transformOptions === "function"
          ) {
            Reflect.set(element, "options", element?.transformOptions(res.result));
          }
        })
        .catch((err: any) => {
          throw new Error(err);
        })
        .finally(() => {
          Reflect.set(element.attr, "loading", false);
        });
    }
  }
};

initDefault();

effect(() => {
  isSearchLoading.value = props.isSearchLoading;
});

// 判断多选选择框是否全选
function selectChangeItem(value: string[] | number[], options: IOptions[] | null | undefined, item: IFieldEvent) {
  if (value.length === 0 && options?.length === 0) {
    Reflect.set(item, "checkAll", false);
    Reflect.set(item, "indeterminate", false);
    return;
  }
  if (value.length === options?.length) {
    Reflect.set(item, "checkAll", true);
    Reflect.set(item, "indeterminate", false);
  } else if (value.length === 0) {
    Reflect.set(item, "checkAll", false);
    Reflect.set(item, "indeterminate", false);
  } else {
    Reflect.set(item, "checkAll", false);
    Reflect.set(item, "indeterminate", true);
  }
}

// 获取当前搜索条件
function getSearchData() {
  const searchData: Record<string, any> = {};
  for (const key in _fields.value) {
    const item = _fields.value[key];
    // 如果是 Select 并且 options 的长度和 value 的长度一样，说明是全部选中
    if (item.inputType === IType.Select && item?.options?.length === (item?.value as (string | number)[])?.length) {
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(_fields.value, key)) {
      const value: IFieldEventValue = item.value as IFieldEventValue;
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

function handleHide() {
  Object.keys(_fields.value).forEach((key) => {
    if (!isExpandHidden.value) {
      if (propsDefaultHide.value[key]) {
        Reflect.set(_fields.value[key], "isExpandHiddenShow", true);
      }
    } else {
      Reflect.set(_fields.value[key], "isExpandHiddenShow", propsDefaultHide.value[key]);
    }
  });

  if (!isExpandHidden.value) {
    isExpandHidden.value = true;
  } else {
    isExpandHidden.value = false;
  }
}

// 搜索条件提交
const onSubmit = () => {
  emits("onSubmit", getSearchData());
};

props.isAutoSubmit && onSubmit();

// 导出
const onExport = () => {
  emits("export", getSearchData());
};

// 重置
function onReset() {
  let _fieldsValue: Record<string, any> = {};

  for (const key in _fieldsDefaultValue.value) {
    if (Object.prototype.hasOwnProperty.call(_fieldsDefaultValue.value, key)) {
      const value = (_fields.value[key].value = _fieldsDefaultValue.value[key]);
      if (
        !isEmpty(value) &&
        ["createdAt", "updatedAt"].includes(key) &&
        Array.isArray(value) &&
        value.length
      ) {
        // 把查询开始时间设置为 00:00:00
        // 把查询结束时间设置为 23:59:59
        Reflect.set(_fieldsValue, key, [
          dayjs(value[0]).format("YYYY-MM-DDT00:00:00.sssZ"),
          dayjs(value[1]).format("YYYY-MM-DDT23:59:59.sssZ"),
        ]);
      } else if (value instanceof Array) {
        if (value.length !== 0) {
          Reflect.set(_fieldsValue, key, value);
        }
      } else if (!isEmpty(value)) {
        Reflect.set(_fieldsValue, key, value);
      }
    }
  }

  emits("onSubmit", _fieldsValue);
};

function blurInputText(item: IFieldEvent) {
  if (!item.value || item?.isInputTrim === false) return;
  item.value = item.value.toString().trim();
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


// 组件卸载时清除监听
onUnmounted(() => {
  for (const key in _fieldsWatch.value) {
    if (_fieldsWatch.value[key]) {
      _fieldsWatch.value[key]();
    }
  }
});

defineExpose({
  getSearchData,
  fetchOptionsMethod,
});
</script>

<style lang="scss">
.m-search-model-form {
  position: relative;

  &.add-hide {
    padding: 10px 16px 0 0;
  }

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
    order: 9999;
  }

  .hide-wrap {
    position: absolute;
    right: -6px;
    top: -6px;
    border: 1px solid #dcdfe6;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;
    transition: all 0.3s ease-in-out;

    &.hide-wrap-active {
      transform: rotate(180deg);
    }

    .hide-icon {
      cursor: pointer;
    }
  }


}

.m-search-model-select-header {
  .el-checkbox {
    display: flex;
    height: unset;
  }
}
</style>