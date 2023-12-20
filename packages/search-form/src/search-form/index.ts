export type {
    TableColumnFilterPlacement,
    TableColumnSortOrders
  } from "./types";
  
import type { App } from "vue";
import Table from "./index.vue";

export const PureTable = Object.assign(Table, {
install: function (app: App) {
    app.component(Table.name, Table);
}
});

export default PureTable;