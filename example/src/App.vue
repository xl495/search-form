<script setup lang="ts">
import { IType } from '@tempoi/search-form'

import { ref } from 'vue'

const searchForm = ref()

const fields = ref({
  payeeMerchantName: {
    label: '收款人名称',
    value: '',
    inputType: IType.Input,
    placeholder: '请输入收款人名称',
    event: {},
    attr: {
      suffixIcon: 'Search',
    },
  },
  nickName: {
    label: '昵称',
    value: '',
    inputType: IType.Input,
    placeholder: '请输入昵称',
    event: {},
    attr: {
      suffixIcon: 'Search',
    },
  },
  infoType: {
    label: '账户性质',
    value: '',
    placeholder: '',
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
  console.log('searchForm',searchForm.value);
  
}

</script>

<template>
  <div>
    <m-search-form ref="searchForm" style="width: 1200px;" :fields="fields" :label-width="120" @on-submit="submit" />
  </div>
</template>