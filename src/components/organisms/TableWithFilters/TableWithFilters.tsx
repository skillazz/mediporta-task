import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
	Stack,
	TextField
} from "@mui/material";
import {
	DEFAULT_ITEMS_PER_PAGE,
	FILTER_DATA,
	TABLE_COLUMNS
} from "../../../constants";
import type { Tag } from "../../../types/Tags";
import { ChangeEvent, FC } from "react";
import { TableFilters } from "../../molecules/TableFilters/TableFilters";
import { v4 as uuid } from "uuid";
import { useSearchParams } from "react-router-dom";

interface IProps {
	rows: Tag[];
}

export const TableWithFilters: FC<IProps> = ({ rows }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const handleFilterChange = (name: string, value: string) => {
		setSearchParams((prevParams: URLSearchParams) => {
			const newParams = new URLSearchParams(prevParams.toString());
			newParams.set(name, value);
			newParams.set("page", "1");
			return newParams;
		});
	};
	const handleItemsPerPageChange = (event: ChangeEvent<HTMLInputElement>) => {
		const itemsPerPage = Number(event.target.value);
		setSearchParams((prevParams: URLSearchParams) => {
			const newParams = new URLSearchParams(prevParams.toString());
			newParams.set("page", "1");
			if (itemsPerPage < 1) {
				newParams.set("pagesize", "1");
			} else if (itemsPerPage > 100) {
				newParams.set("pagesize", "100");
			} else {
				newParams.set("pagesize", itemsPerPage.toString());
			}
			return newParams;
		});
	};

	return (
		<>
			<Stack
				direction="row"
				spacing={2}
				justifyContent="flex-end"
				sx={{ marginBottom: 2 }}
			>
				<TextField
					id={uuid()}
					label="Items per page"
					type="number"
					variant="outlined"
					defaultValue={DEFAULT_ITEMS_PER_PAGE}
					InputProps={{ inputProps: { min: 1, max: 100 } }}
					sx={{ minWidth: 120 }}
					onChange={handleItemsPerPageChange}
				/>
				{FILTER_DATA.map(({ name, label, values }) => (
					<TableFilters
						key={name}
						id={uuid()}
						label={label}
						name={name}
						value={searchParams.get(name) ?? ""}
						onChange={(event) => handleFilterChange(name, event.target.value)}
						items={values.map((value) => ({ value, label: value }))}
					/>
				))}
			</Stack>
			<TableContainer component={Paper} sx={{ marginBottom: 2 }}>
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
