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
import axios from "axios";

const TableHeaders = [
	"Field Name",
	"Sport",
	"Surface Type",
	"Location",
	"Description",
	"Contact info",
	"Rating",
];






function Fields() {
	const [rows, setRows] = useState([]);
	const [filteredRows, setFilteredRows] = useState(rows);	
	const [selectedSport, setSelectedSport] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const getField = async () => {
		try {
		  const url = `http://localhost:8000/fields/`;
		  const { data } = await axios.get(url);
		  setRows(data);
		} catch (err) {
		  console.log(err);
		}
	  };
	
	  useEffect(() => {
		getField();
	  }, []);

	const uniqueSport = [...new Set(rows.map((item) => item.sport))];

	const handleFilter = (selectedSport) => {
		setSelectedSport(selectedSport);
		const filteredData = rows.filter((row) => {
		  const matchesSport =
			selectedSport === "" || row.sport === selectedSport;
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
							<StyledTableCell align="right">{row.sport}</StyledTableCell>
							<StyledTableCell align="right">{row.surfaceType}</StyledTableCell>
							<StyledTableCell align="right">{row.location.city}</StyledTableCell>
							<StyledTableCell align="right">{row.description}</StyledTableCell>
							<StyledTableCell align="right">{row.bookingInfo.contactEmail}</StyledTableCell>
							<StyledTableCell align="right">{row.rating}</StyledTableCell>
							
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
