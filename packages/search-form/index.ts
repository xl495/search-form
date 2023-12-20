import type { App } from "vue";
import search from "./src/search-form/index.vue";

export const SearchForm = Object.assign(search, {
  install: function (app: App) {
    app.component(search.name, search);
  }
});

export default SearchForm;