import React, { useState } from "react";
import "../styles/fields.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function FilterFields({uniqueField, onFilter}) {
	const [field, setField] = useState("");

	const handleChange = (event) => {
		const selectedField = event.target.value;
		setField(selectedField);
		onFilter(selectedField);
	};

	return (
		<>
			<FormControl className="Filter" sx={{ m: 1, minWidth: 300}}>
				<InputLabel id="demo-simple-select-helper-label">Field</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={field}
					label="Field"
					onChange={handleChange}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{uniqueField.map((field) => (
						<MenuItem key={field.name} value={field.name}>
							{field.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
}

export default FilterFields;
