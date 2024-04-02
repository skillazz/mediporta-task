import { Meta } from "@storybook/react";
import { TableFilters } from "./TableFilters";
import { SelectChangeEvent } from "@mui/material";
import { SelectMenuItem } from "../../../types/SelectMenuItem";
import { useState } from "react";

export default {
	title: "Components/TableFilters",
	component: TableFilters
} as Meta;

export const Default = () => {
	const id = "filter";
	const label = "Filter";
	const name = "filter";
	const [value, setValue] = useState<string>("");
	const items: SelectMenuItem[] = [
		{ value: "option1", label: "Option 1" },
		{ value: "option2", label: "Option 2" },
		{ value: "option3", label: "Option 3" }
	];

	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value);
	};

	return (
		<TableFilters
			id={id}
			label={label}
			name={name}
			onChange={handleChange}
			items={items}
			value={value}
		/>
	);
};
