import { Box } from "@mui/material";
import React, { useState } from "react";

export default function FileUpload({ name, setFile, sx, children }) {
  const [isDraging, setIsDraging] = useState(false);

  const onFileSelect = (event) => {
    if (event.target.files.length > 0) {
      setFile(name, event.target.files);
    }
  };

  const onDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setIsDraging(false);
    setFile(name, files);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    setIsDraging(true);
    event.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (event) => {
    event.preventDefault();
    setIsDraging(false);
  };

  return (
    <Box
      style={{
        width: "100%",
        aspectRatio: "2/1",
        border: "1px dashed rgba(0, 0, 0, 0.12)",
        backgroundColor: "#F2F7FF",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        overflow: "hidden",
        ...sx,
      }}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <input
        onChange={onFileSelect}
        type="file"
        id="file"
        style={{ display: "none" }}
        size={"2000mb"}
      />
      {isDraging ? null : <>{children}</>}
    </Box>
  );
}
