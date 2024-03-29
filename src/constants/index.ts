import { GridColDef } from "@mui/x-data-grid";
import { Order, SortBy } from "../types/Filters";

export const TABLE_COLUMNS: GridColDef[] = [
	{ field: "name", headerName: "Name" },
	{ field: "count", headerName: "Post's count" }
];

export const FILTER_DATA = [
	{ name: "sort", label: "Sort by", values: Object.values(SortBy) },
	{ name: "order", label: "Order", values: Object.values(Order) }
];
