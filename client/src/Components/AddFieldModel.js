import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%", // Adjusted width to be responsive
  maxHeight: "90vh", // Maximum height
  overflowY: "scroll", // Enable vertical scrolling
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2, // Optional: Adds rounded corners to the modal
};



export default function AddFieldModal({open, handleClose, handleSuccess, handleSubmit}) {
 
	
		
  // Field details state
  const [fieldName, setFieldName] = useState("");
  const [fieldSport, setFieldSport] = useState("");
  const [fieldLength, setFieldLength] = useState("");
  const [fieldWidth, setFieldWidth] = useState("");
  const [surfaceType, setSurfaceType] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lights, setLights] = useState(false);
  const [seating, setSeating] = useState(false);
  const [changingRoom, setChangingRoom] = useState(false);
  const [contactEmail, setContactEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternativePhoneNumber, setAlternativePhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(5);

  const resetData = () => {
    setFieldName("");
    setFieldSport("");
    setFieldLength("");
    setFieldWidth("");
    setSurfaceType("");
    setCity("");
    setState("");
    setCountry("");
    setLights(false);
    setSeating(false);
    setChangingRoom(false);
    setContactEmail("");
    setPhoneNumber("");
    setAlternativePhoneNumber("");
    setDescription("");
    setRating(5);
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const fieldData = {
        name: fieldName,
        sport: fieldSport,
        dimensions: { length: fieldLength, width: fieldWidth },
        surfaceType,
        location: { city, state, country },
        lights,
        amenities: { seating, changing_room: changingRoom },
        bookingInfo: { contactEmail, phoneNumber, alternativePhoneNumber },
        description,
        rating,
      };

      const response = await axios.post("http://localhost:8000/fields", fieldData, {withCredentials: true});
      console.log(response);
      handleSuccess();
    } catch (err) {
      console.error(err);
    }
    resetData();
    handleClose();
  };


  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
          style = {{overflow: "scroll"}}
      >
        <Box className="modalStyle" style = {{overflow: "scroll" , width: "50%",  boxShadow: 24, padding:20}}>
          <h1 style={{ marginBottom: 20 }}>Add a New Field</h1>
          <TextField
            label="Field Name"
            variant="outlined"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sport"
            variant="outlined"
            value={fieldSport}
            onChange={(e) => setFieldSport(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Length"
            variant="outlined"
            value={fieldLength}
            onChange={(e) => setFieldLength(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Width"
            variant="outlined"
            value={fieldWidth}
            onChange={(e) => setFieldWidth(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Surface Type"
            variant="outlined"
            value={surfaceType}
            onChange={(e) => setSurfaceType(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="State"
            variant="outlined"
            value={state}
            onChange={(e) => setState(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Country"
            variant="outlined"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={
              <Switch
                checked={lights}
                onChange={(e) => setLights(e.target.checked)}
              />
            }
            label="Lights"
          />
          <FormControlLabel
            control={
              <Switch
                checked={seating}
                onChange={(e) => setSeating(e.target.checked)}
              />
            }
            label="Seating"
          />
          <FormControlLabel
            control={
              <Switch
                checked={changingRoom}
                onChange={(e) => setChangingRoom(e.target.checked)}
              />
            }
            label="Changing Room"
          />
          <TextField
            label="Contact Email"
            variant="outlined"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Alternative Phone Number"
            variant="outlined"
            value={alternativePhoneNumber}
            onChange={(e) => setAlternativePhoneNumber(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            label="Rating"
            variant="outlined"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
            inputProps={{ min: 1, max: 10 }}
          />

          <div className="ModalButtons">
            <Button
              variant="contained"
              onClick={() => {
                resetData();
                handleClose(false);
              }}
              sx={{
                backgroundColor: "#171c26",
                "&:hover": {
                  backgroundColor: "#364258",
                  color: "#fff",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={onSubmit}
              style={{ marginLeft: 15 }}
              sx={{
                backgroundColor: "#54B435",
                "&:hover": {
                  backgroundColor: "#69e042",
                  color: "#fff",
                },
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
