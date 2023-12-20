export type {
  IOptions,
  IGetOptionforKey,
  IFieldEventValue,
  IFieldEvent,
  IField,
  IExpand,
} from "./types/index";

export {
  IType,
} from "./types/index";

  
import type { App } from "vue";
import SearchFormComponents from "./index.vue";

export const SearchForm = Object.assign(SearchFormComponents, {
install: function (app: App) {
    app.component('tempoi-search-form', SearchFormComponents);
}
});

export default SearchForm;