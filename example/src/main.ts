import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import "@tempoi/search-form/ui/es/style.css";
import mSearchForm from '@tempoi/search-form'
import App from './App.vue'

createApp(App).use(mSearchForm, {
    fetchOptions: (key: string) => {
        return new Promise((resolve) => {
            console.log('key', key);
            setTimeout(() => {
                resolve([{
                    label: key,
                    value: 'test'
                }, {
                    label: key,
                    value: '2222'
                }])
            }, 3000)
        })
    }
}).mount('#app')
