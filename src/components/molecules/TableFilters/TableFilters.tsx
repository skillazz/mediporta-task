import {
	InputLabel,
	Select,
	SelectChangeEvent,
	MenuItem,
	FormControl
} from "@mui/material";
import { FC } from "react";
import type { SelectMenuItem } from "../../../types/SelectMenuItem";
import styles from "./TableFilters.module.scss";

interface IProps {
	id: string;
	label: string;
	name: string;
	onChange: (event: SelectChangeEvent) => void;
	items: SelectMenuItem[];
	value: string;
}

export const TableFilters: FC<IProps> = ({
	id,
	label,
	onChange,
	name,
	items,
	value
}) => {
	return (
		<FormControl sx={{ minWidth: 100 }} className={styles.wrapper}>
			<InputLabel id={id}>{label}</InputLabel>
			<Select
				labelId={id}
				onChange={onChange}
				label={label}
				name={name}
				value={value}
			>
				{items.map((item, index) => (
					<MenuItem key={`${item.value}_${index}`} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
