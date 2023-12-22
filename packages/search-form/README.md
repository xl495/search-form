README
===========================
基于 Element-Plus 二次封装 m-search-form

## example

全局注册 main.ts

``` Vue3
import "@tempoi/search-form/ui/es/style.css";
import mSearchForm from '@tempoi/search-form'
import App from './App.vue'

createApp(App).use(mSearchForm, {
    fetchOptions: (key: string) => {
        return new Promise((resolve) => {
            resolve([{
                label: key,
                value: '2222'
            }])
        })
    }
}).mount('#app')

<m-search-form ref="searchForm" :fields="fields" @on-submit="submit" />
```

按需引入 
```
import mSearchForm from '@tempoi/search-form'
<m-search-form ref="searchForm":fields="fields" @on-submit="submit" />
```