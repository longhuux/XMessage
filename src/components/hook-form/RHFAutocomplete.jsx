import PropTypes from "prop-types";

import { useFormContext, Controller } from "react-hook-form";

import { Autocomplete, TextField } from "@mui/material";

RHFAutocomplete.prototype = {
    name: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.node,
};

export default function RHFAutocomplete({ name,label, helperText, ...other }) {
  const { control, setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          {...field}
          fullWidth
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
          onChange={(event, newValue)=>setValue(name, newValue, {shouldValidate: true})}
          renderInput={(params) => (<TextField label={label} error={!!error} helperText={error ? error.message : helperText} {...params}/>)}
        />
      )}
    />
  );
}
