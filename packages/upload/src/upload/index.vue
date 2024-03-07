<template>
  <div class="upload-wrap">
    <button @click="upload">上传</button>
    <upload-file-list :file-list-key="provideFileKey" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import uploadFileList from "./upload-file-list.vue";
import { UploadFile } from "./types";

const fileList = ref<File[]>([]);

const uploadFile = ref<UploadFile[]>([]);

const provideFileKey = Symbol("fileList");

provide(provideFileKey, uploadFile);

const upload = () => {
  //  选择文件
  const file = document.createElement("input");
  file.type = "file";
  file.accept = ".jpg,.png,.jpeg";
  file.click();
  file.onchange = () => {
    const files = file.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        fileList.value.push(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          uploadFile.value.push({
            ...file,
            name: file.name,
            size: file.size,
            type: file.type,
            url: reader.result as string,
            status: "ready"
          });
        };
      }
    }
  };
};
</script>

<style lang="scss">
.upload-wrap {
  width: 300px;
  .a {
    color: red;
  }
}
</style>
