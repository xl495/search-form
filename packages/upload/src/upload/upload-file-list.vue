<template>
  <div class="upload-file-list">
    <div
      class="upload-file-item"
      v-for="(file, i) in fileList"
      :key="i"
      :style="itemWrapStyle(file)"
      :class="{ padding: !file.type.startsWith('image/') }"
    >
      <div class="upload-file-item__bg" :style="bgStyle(file)"></div>
      <div class="upload-file-item__name">{{ file.name }}</div>
      <div class="upload-file-item__size">{{ formatSize(file.size) }}</div>
      <div class="upload-file-item__action">upload</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, CSSProperties } from "vue";
import { UploadFile } from "./types";

const props = defineProps<{
  fileListKey: symbol;
}>();

const fileList = inject<UploadFile[]>(props.fileListKey, []);

const formatSize = (size: number) => {
  if (size < 1024) {
    return size + "B";
  } else if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + "KB";
  } else {
    return (size / 1024 / 1024).toFixed(2) + "MB";
  }
};

const bgStyle = (file: UploadFile) => {
  const isImage = file.type.startsWith("image/");

  if (isImage) {
    // 全部显示图片
    return {
      //   渐变
      background: `url(${URL.createObjectURL(file)}) 0 0/cover no-repeat`,
    } as CSSProperties;
  }
  return {};
};

const itemWrapStyle = (file: UploadFile) => {
  const isImage = file.type.startsWith("image/");

  if (isImage) {
    // 全部显示图片
    return {
      height: "100px",
    } as CSSProperties;
  }
  return {};
};
</script>

<style lang="scss">
.upload-file-list {
  .upload-file-item {
    display: flex;
    justify-content: space-between;
    flex: 1;
    border-radius: 4px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8155637254901961) 0%,
      rgba(34, 121, 9, 0.804359243697479) 30%,
      rgba(255, 255, 255, 0) 100%
    );
    margin-top: 12px;
    padding: 8px;
    position: relative;
    color: #fff;
    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
    }
    &__size,
    &__bg,
    &__name,
    &__action {
      position: absolute;
    }

    &__name {
      left: 8px;
      top: 8px;
    }

    &__size {
      left: 8px;
      bottom: 8px;
      font-size: 12px;
    }

    &__action {
      top: 8px;
      right: 8px;
      padding: 4px 8px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.2);
      cursor: pointer;
    }
  }
}
</style>
