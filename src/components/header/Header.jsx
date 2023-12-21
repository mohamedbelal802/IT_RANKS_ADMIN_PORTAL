import { Container } from "@mui/material";
import React from "react";
import LogoChanger from "./LogoChanger";
import ProfileMenu from "./ProfileMenu";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#fff",
        padding: "16px 0px",
        position: "sticky",
        top: "0px",
        zIndex: "1200",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        maxWidth={"xl"}
      >
        <ProfileMenu />
        <LogoChanger />
      </Container>
    </header>
  );
}
