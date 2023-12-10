import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "../styles/fields.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: "#4a4a95",
		color: "#4a4a95",
	},
	marginLeft: 0,

	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "90%",
	},
	border: "solid 2px #4a4a95",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	"&:hover": {
		color: "#fff",
	},
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "14ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

export default function SearchBar ({ searchQuery, onSearch }){
	return (
		<Search className="Search">
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search by Name"
						inputProps={{ "aria-label": "search" }}
						onChange={onSearch}
						value={searchQuery}
					/>
				</Search>
	);
}


