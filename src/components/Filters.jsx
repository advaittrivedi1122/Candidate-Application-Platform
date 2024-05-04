import React, { useContext } from "react";
import { TextField, Autocomplete, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { FilterContext } from "../context/FilterContext";
const names = [
  "Humaira Sims",
  "Santiago Solis",
  "Dawid Floyd",
  "Mateo Barlow",
  "Samia Navarro",
  "Kaden Fields",
  "Genevieve Watkins",
  "Mariah Hickman",
  "Rocco Richardson",
  "Harris Glenn"
];
export default function Filters(props) {

    const { roles, setRoles } = useContext(FilterContext)

    

  return (
    <Autocomplete
      sx={{ m: '5px 10px', minWidth: props.width, width: "auto" }}
      multiple
      options={names}
      getOptionLabel={(option) => option}
      disableCloseOnSelect
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={props.label}
        //   placeholder="Multiple Autocomplete"
        />
      )}
      renderOption={(props, option, { selected }) => (
        <MenuItem
          {...props}
          key={option}
          value={option}
          sx={{ justifyContent: "space-between", fontSize: "small" }}
        >
          {option}
        </MenuItem>
      )}
    />
  );
}