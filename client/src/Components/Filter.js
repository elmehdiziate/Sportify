import React, { useState } from "react";
import "../styles/fields.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Filter({uniqueSport, onFilter}) {
	const [Sport, setSport] = useState("");

	const handleChange = (event) => {
		const selectedSport = event.target.value;
		setSport(selectedSport);
		onFilter(selectedSport);
	};

	return (
		<>
			<FormControl className="Filter" sx={{ m: 1, minWidth: 200 }}>
				<InputLabel id="demo-simple-select-helper-label">Sport</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={Sport}
					label="Sport"
					onChange={handleChange}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{uniqueSport.map((Sport) => (
						<MenuItem key={Sport} value={Sport}>
							{Sport}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
}

export default Filter;
