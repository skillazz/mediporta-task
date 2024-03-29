import {
	InputLabel,
	Select,
	SelectChangeEvent,
	MenuItem,
	FormControl
} from "@mui/material";
import { FC } from "react";
import type { SelectMenuItem } from "../../../types/SelectMenuItem";

interface IProps {
	id: string;
	label: string;
	name: string;
	onChange: (event: SelectChangeEvent) => void;
	items: SelectMenuItem[];
}

const TableFilters: FC<IProps> = ({ id, label, onChange, name, items }) => {
	return (
		<FormControl sx={{ minWidth: 100 }}>
			<InputLabel id={id}>{label}</InputLabel>
			<Select labelId={id} onChange={onChange} label={label} name={name}>
				{items.map((item, index) => (
					<MenuItem key={`${item.value}_${index}`} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default TableFilters;
