<script setup lang="ts">
import searchForm from '@tempoi/search-form'


import { ref } from 'vue'

const fields = ref({
  'payeeMerchantName': {
    label: '收款人名称',
    value: '',
    key: 'payeeMerchantName',
    inputType: searchForm.IType.Input,
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
    inputType: searchForm.IType.Input,
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
    inputType: searchForm.IType.Select,
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
    inputType: searchForm.IType.Select,
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
  <div>
      111
      <search-form style="width: 1200px;" :fields="fields" :label-width="120" @on-submit="submit" />
  </div>
</template>