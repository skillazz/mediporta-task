import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
	Stack,
	SelectChangeEvent
} from "@mui/material";
import { TABLE_COLUMNS } from "../../../constants";
import type { Tag } from "../../../types/Tags";
import { FC } from "react";
import TableFilters from "../../molecules/TableFilters/TableFilters";
import { v4 as uuid } from "uuid";
import { Order, SortBy } from "../../../types/Filters";
import { attachUrlParams } from "../../../utils";

interface IProps {
	rows: Tag[];
}

export const TableWithFilters: FC<IProps> = ({ rows }) => {
	const handleFilterChange = (event: SelectChangeEvent) => {
		if (event.target.name === "sort") {
			attachUrlParams({
				sort: event.target.value
			});
		} else {
			attachUrlParams({
				order: event.target.value
			});
		}
	};

	return (
		<>
			<Stack direction="row" spacing={2} justifyContent="flex-end">
				<TableFilters
					id={uuid()}
					label="Sort by"
					name="sort"
					onChange={handleFilterChange}
					items={Object.values(SortBy).map((value) => ({
						value,
						label: value
					}))}
				/>
				<TableFilters
					id={uuid()}
					label="Order"
					name="order"
					onChange={handleFilterChange}
					items={Object.values(Order).map((value) => ({ value, label: value }))}
				/>
			</Stack>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							{TABLE_COLUMNS.map((column) => (
								<TableCell key={column.field} align={column.align}>
									{column.headerName}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.id}>
								{TABLE_COLUMNS.map((column) => (
									<TableCell key={column.field} align={column.align}>
										{row[column.field as keyof Pick<Tag, "name" | "count">]}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
