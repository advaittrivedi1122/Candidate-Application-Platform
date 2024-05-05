import React, { useContext, useEffect, useState } from "react";
import { TextField, Autocomplete, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Filters(props) {

  return (
    <Autocomplete
    onChange={(event, value) => props.setFilter(value)}
      sx={{ m: '5px 10px', minWidth: props.width, width: "auto" }}
      multiple
      options={props.options}
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
          {selected ? <CheckIcon color="info" /> : null}
        </MenuItem>
      )}
    />
  );
}