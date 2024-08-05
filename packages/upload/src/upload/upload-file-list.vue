<template>
  <TransitionGroup name="fade" tag="div" class="upload-file-list">
    <div class="upload-file-item" v-for="fileItem in fileSystem.files" :key="fileItem.uid"
      :style="createFileItemStyle(fileItem)">
      <div class="upload-file-item-info">
        <div class="upload-file-item-info__name">{{ fileItem.file.name }}</div>
        <div class="upload-file-item-info__size">
          {{ formatSize(fileItem.file.size) }}
          {{ fileItem.progress }}
        </div>
        <div class="upload-file-item-info__action">
          <!-- 上传按钮 -->
          <div class="upload-file-item-info__action-upload" @click="startUpload(fileItem)">
            <div class="dot"></div>
            <div class="progress" :style="{ '--progress-width': fileItem.progress + '%' }"></div>
            <i class="iconfont icon-upload" v-if="fileItem.status !== 'uploading'"></i>
            {{ fileItem.status === 'uploading' ? fileItem.progress + '%' : '' }}
          </div>
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { computed } from "vue";
import fileSystem from "./file";
import { FileItemType } from "./file-item";
import { AjaxRequest } from "./ajax";

const http = new AjaxRequest({
  baseURL: "http://localhost:4000/upload",
  headers: {
    'Authorization': `
      Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6InNAYS5jb20iLCJpYXQiOjE3MjIzMjc4MzksImV4cCI6MTcyMjQxNDIzOX0.00nMn2H7sScGgpc41Bhqv-6WhQNmh3za-C0nre8zdAA
    `
  }
});


const formatSize = computed(() => {
  return (size: number) => {
    if (size < 1024) {
      return size + " B";
    } else if (size < 1024 * 1024) {
      return (size / 1024).toFixed(2) + " KB";
    } else {
      return (size / 1024 / 1024).toFixed(2) + " MB";
    }
  };
})

const createFileItemStyle = (file: FileItemType) => {
  return {
    '--background': `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8155637254901961) 0%,
      rgba(0, 0, 0, 0.804359243697479) 30%,
      rgba(255, 255, 255, 0) 100%
    ), url(${file.previewUrl}) no-repeat center center / cover`,
  };
};

/* 上传文件 */
const startUpload = (file: FileItemType) => {

  // http.send(file.file, {
  //   onUploadProgress: (progressEvent) => {
  //     file.progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
  //   }
  // }).then((res) => {
  //   console.log("上传成功", res);
  //   file.status = "success";
  // }).catch((err) => {
  //   console.log("上传失败", err);
  //   file.status = "error";
  // });

  file.progress = 0;
  let fileProgress = setInterval(() => {
    file.progress += 3;
    file.status = "uploading"
    if (file.progress >= 100) {
      clearInterval(fileProgress);
      file.status = "success";
    }
  }, 300);
  console.log("上传文件", file);
};

</script>

<style lang="scss">
.upload-file-list {
  position: relative;

  .upload-file-item {
    display: flex;
    justify-content: space-between;
    flex: 1;
    border-radius: 4px;
    background: var(--background);
    margin-top: 12px;
    padding: 8px;
    position: relative;
    color: #fff;
    height: 100px;

    &-info {
      width: 100%;
      height: 50px;
      line-height: 25px;
      display: grid;
      grid-template-areas:
        "name action"
        "size action";
      grid-template-columns: auto 50px;

      &__name {
        grid-area: name;
        font-size: 12px;
        color: white;
        font-size: 14px;
        // 不换行 用省略号代替
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &__size {
        grid-area: size;
        font-size: 12px;
        color: white;
      }

      &__action {
        grid-area: action;
        font-size: 12px;
        color: white;
        display: flex;
        justify-content: flex-end;

        @at-root &-upload {
          position: relative;
          --size: 14px;
          cursor: pointer;
          height: 24px;
          width: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: border-color 0.3s;

          &:hover {
            border-color: white;
          }

          // 添加进度条
          --progress-width: 100%;

          .dot {
            width: 10px;
            height: 10px;
            background-color: red;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: rotate 2s linear infinite;
          }

          @keyframes rotate {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }


          i {
            font-size: var(--size);
          }

        }
      }
    }
  }
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.fade-leave-active {
  position: absolute;
}
</style>
