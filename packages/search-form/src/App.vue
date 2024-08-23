<script setup lang="ts">
import { ref } from 'vue'
import searchForm from './search-form/components/search-form.vue'
import { IField, IType } from './search-form/types';

const fields = ref<IField>({
    payeeMerchantName: {
        label: '收款人名称',
        value: '1',
        inputType: IType.Input,
        placeholder: '请输入收款人名称',
        isInputTrim: false,
        event: {},
        attr: {
            suffixIcon: 'Search',
        },
    },
    'nickName': {
        label: '昵称',
        value: '',
        inputType: IType.Input,
        placeholder: '请输入昵称',
        event: {},
        isExpandHiddenShow: true,
        attr: {
            suffixIcon: 'Search',
        },
    },
    'infoType': {
        label: '账户性质',
        value: '',
        placeholder: '',
        inputType: IType.Select,
        isExpandHiddenShow: true,
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
            {
                label: 'ALL1',
                value: 0,
            },
        ],
        event: {},
        attr: {},
    },
    'infoType1': {
        label: '账户性质111',
        value: [],
        placeholder: '',
        inputType: IType.Select,
        isExpandHiddenShow: true,
        options: [ ],
        event: { },
        attr: {
            'multiple': true,
        },
    },
    ownerType1: {
        label: '收款人类型1',
        value: '',
        placeholder: '',
        inputType: IType.Select,
        options: [
            {
                label: 'ALL',
                value: '',
            },
            {
                label: 'ALL1',
                value: 0,
            },
        ],
        event: {},
        attr: {},
    },
})

const submit = (data: Record<string, any>) => {
    console.log(data)
}

const expand = ref({
    isExpand: true,
    isDefaultExpandHidden: true
})

</script>

<template>
    <div class="wrap">
        <search-form style="width: 1559px;" :fields="fields" :label-width="120" :row-span="6" @on-submit="submit"
            :expand="expand" />
    </div>
</template>


<style lang="scss">
.wrap {
    display: flex;
    justify-content: center;
}
</style>