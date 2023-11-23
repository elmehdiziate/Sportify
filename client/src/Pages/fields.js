import React, { useEffect } from "react";
import Navbar from "../Components/NavBar";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import {
	StyledTable,
	StyledTableCell,
	StyledTableRow,
	StyledTableContainerAc,
} from "../Components/TableComponents";
import Filter from "../Components/Filter";
import "../styles/fields.css";
import SearchBar from "../Components/searchBar";
import { useState } from "react";

const TableHeaders = [
	"Field Name",
	"Sport",
	"Surface Type",
	"Location",
	"Description",
	"Rating",
];

function createData(name, Sport, SurfaceType, Location, Description, Rating) {
	return { name, Sport, SurfaceType, Location, Description, Rating };
  }

const rows = [
	createData("la prairie", "soccer", "grass", "ifrane", "soccer field ", "5"),
	createData('Marché', 'Basketball', 'clay', 'ifrane', 'bascketball field', '8'),
	createData('La prairie tenis', 'Tennis', 'clay', 'ifrane', 'tenis field', '7'),
	createData('Ein vitel', 'Rugby', 'Grass', 'Ein vitel', 'Rugby field', '3'),
	createData('Pam', 'soccer', 'grass', 'ifrane', 'soccer field', '7'),
];


function Fields() {
	// const [rows, setRows] = useState([]);
	const [filteredRows, setFilteredRows] = useState(rows);	
	const [selectedSport, setSelectedSport] = useState("");
	const [searchQuery, setSearchQuery] = useState("");

	const uniqueSport = [...new Set(rows.map((item) => item.Sport))];

	const handleFilter = (selectedSport) => {
		setSelectedSport(selectedSport);
		const filteredData = rows.filter((row) => {
		  const matchesSport =
			selectedSport === "" || row.Sport === selectedSport;
		  const matchesSearch =
			row.name.toLowerCase().includes(searchQuery.toLowerCase());
		  return matchesSport;
		});
		setFilteredRows(filteredData);
	};

	const handleSearch = (event) => {
		const query = event.target.value;
		setSearchQuery(query);

		const filteredData = rows.filter((row) => {
			const matchesSport =
				selectedSport === "" || row.Sport === selectedSport;
			const matchesSearch = row.name
				.toLowerCase()
				.includes(query.toLowerCase());
			return matchesSport && matchesSearch;
		});

		setFilteredRows(filteredData);
	};
	return (
		<>
			<Navbar />
		<div className="fields">
		<div className="FilterContainer">
				<SearchBar onSearch={handleSearch} value={searchQuery}/>
				<Filter uniqueSport={uniqueSport} onFilter={handleFilter}/>
			</div>

			<StyledTableContainerAc component={Paper}>
				<StyledTable sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							{TableHeaders.map((item) => {
								return <StyledTableCell align="center">{item}</StyledTableCell>;
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredRows.map((row, index) => (
						<StyledTableRow key={index}>
							<StyledTableCell align="right">{row.name}</StyledTableCell>
							<StyledTableCell align="right">{row.Sport}</StyledTableCell>
							<StyledTableCell align="right">{row.SurfaceType}</StyledTableCell>
							<StyledTableCell align="right">{row.Location}</StyledTableCell>
							<StyledTableCell align="right">{row.Description}</StyledTableCell>
							<StyledTableCell align="right">{row.Rating}</StyledTableCell>
						</StyledTableRow>
						  ))} 
					</TableBody>
				</StyledTable>
			</StyledTableContainerAc>
		</div>
		</>
	);
}

export default Fields;
