import styled from "@emotion/styled";
import { CardMedia, TextField } from "@mui/material";
import React from "react";

const StyledInput = styled(TextField)`
  .MuiInputBase-root {
    padding: 0px !important;
  }
  &:hover fieldset {
    border-color: #4e5d78 !important;
  }
  & fieldset {
    border-color: #4e5d78 !important;
    border-radius: 8px;
    &.Mui-focused fieldset {
      border-color: white !important;
    }
  }
`;

export default function FormInput({
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  type,
  icon,
  sx,
}) {
  return (
    <StyledInput
      InputProps={{
        startAdornment: (
          <div style={{ padding: "0px 15px" }}>
            <CardMedia
              component={"i"}
              image={icon}
              sx={{ width: "16px", height: "16px", backgroundSize: "contain" }}
            />
          </div>
        ),
      }}
      sx={sx}
      fullWidth
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      type={type}
      variant="outlined"
      inputProps={{
        style: {
          color: "white",
          fontSize: "14px",
          padding: "14px 0px",
        },
      }}
    />
  );
}
