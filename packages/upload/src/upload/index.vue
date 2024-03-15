<template>
  <div class="upload-wrap">
    <button @click="upload">选择文件</button>
    <upload-file-list />
  </div>
</template>

<script setup lang="ts">
import fileSystem from "./file";
import UploadFileList from "./upload-file-list.vue";

const props = withDefaults(defineProps<{
  accept?: string;
  multiple?: boolean;
}>(), {
  accept: ".jpg,.png,.jpeg",
  multiple: false,
});

const upload = () => {
  //  选择文件
  const file = document.createElement("input");
  file.type = "file";
  file.accept = props.accept;
  file.multiple = props.multiple;
  file.click();
  file.onchange = () => {
    const files = file.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        fileSystem.add(file);
      }
    }
  };
};
</script>

<style lang="scss">
.upload-wrap {
  width: 300px;
}
</style>
