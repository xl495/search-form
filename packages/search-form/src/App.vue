<script setup lang="ts">
import { ref } from 'vue'
import searchForm from './search-form/index.vue'
import { IType } from './search-form/types';

const fields = ref({
  'payeeMerchantName': {
    label: '收款人名称',
    value: '',
    key: 'payeeMerchantName',
    inputType: IType.Input,
    placeholder: '请输入收款人名称',
    event: {},
    attr: {
      suffixIcon: 'Search',
    },
  },
  'nickName': {
    label: '昵称',
    value: '',
    key: 'nickName',
    inputType: IType.Input,
    placeholder: '请输入昵称',
    event: {},
    attr: {
      suffixIcon: 'Search',
    },
  },
  'infoType': {
    label: '账户性质',
    value: '',
    placeholder: '',
    key: 'infoType',
    inputType: IType.Select,
    options: [
      {
        label: 'ALL',
        value: '',
      },
    ],
    optionsKey: 'accountType',
    event: {},
    attr: {},
  },
  ownerType: {
    label: '收款人类型',
    value: '',
    placeholder: '',
    key: 'ownerType',
    inputType: IType.Select,
    options: [
      {
        label: 'ALL',
        value: '',
      },
    ],
    event: {},
    attr: {},
  }
})

const submit = (data: Record<string, any>) => {
  console.log(data)
}

</script>

<template>
  <div class="wrap">
    <search-form style="width: 1200px;" :fields="fields" :label-width="120" @on-submit="submit" />
  </div>
</template>


<style lang="scss" >
.wrap {
  display: flex;
  justify-content: center;
}
</style>