import React from "react";

export default function MainSection({ name, children }) {
  return (
    <section id={name} style={{ padding: "12px 0px" }}>
      {children}
    </section>
  );
}
