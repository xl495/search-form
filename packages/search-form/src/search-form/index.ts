import search from "./components/search-form.vue";
import { getCurrentInstance, provide } from 'vue'

export type {
  IOptions,
  IGetOptionforKey,
  IFieldEventValue,
  IFieldEvent,
  IField,
  IExpand,
} from "./types/index";

export {
  IType
} from "./types/index";

import type { App } from "vue";

export const SearchForm = Object.assign(search, {
  install: function (app: App, options: any) {
    const inSetup = !!getCurrentInstance()
    const provideFn = app?.provide ?? (inSetup ? provide : undefined)
    provideFn && provideFn('mSearchFormFetchOptions', options?.fetchOptions)
    app.component('m-search-form', search);
  }
});

export default SearchForm;