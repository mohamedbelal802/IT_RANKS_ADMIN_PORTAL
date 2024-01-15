import styled from "@emotion/styled";
import { CardMedia, TextField } from "@mui/material";
import React, { useState } from "react";

import eyeOffIcon from "../../../assets/auth/eye.svg";

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

export default function PasswordInput({
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
  const [passwordType, setPasswordType] = useState(type);
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
        endAdornment: (
          <div
            onClick={() =>
              setPasswordType((prev) =>
                prev === "password" ? "text" : "password"
              )
            }
            style={{ padding: "0px 15px", cursor: "pointer" }}
          >
            <CardMedia
              component={"i"}
              image={eyeOffIcon}
              sx={{
                ":-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 1000px white inset",
                  backgroundColor: "red !important",
                },
                width: "16px",
                height: "16px",
                backgroundSize: "contain",
              }}
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
      type={passwordType}
      variant="outlined"
      aria-autocomplete={false}
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
