import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
	Stack
} from "@mui/material";
import { FILTER_DATA, TABLE_COLUMNS } from "../../../constants";
import type { Tag } from "../../../types/Tags";
import { FC } from "react";
import TableFilters from "../../molecules/TableFilters/TableFilters";
import { v4 as uuid } from "uuid";
import { attachUrlParams } from "../../../utils";

interface IProps {
	rows: Tag[];
}

export const TableWithFilters: FC<IProps> = ({ rows }) => {
	const handleFilterChange = (name: string, value: string) => {
		const paramsToAdd = { [name]: value };
		attachUrlParams(paramsToAdd);
	};

	return (
		<>
			<Stack direction="row" spacing={2} justifyContent="flex-end">
				{FILTER_DATA.map(({ name, label, values }) => (
					<TableFilters
						key={name}
						id={uuid()}
						label={label}
						name={name}
						onChange={(event) => handleFilterChange(name, event.target.value)}
						items={values.map((value) => ({ value, label: value }))}
					/>
				))}
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
