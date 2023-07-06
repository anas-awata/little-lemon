import React from "react";
import { Text } from "@chakra-ui/react";

function FooterNav({ links, title }) {
  return (
    <ul
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      <li style={{ listStyle: "none" }}>
        <Text color="primary_yellow.50">{title}</Text>
      </li>
      {links.map((link) => (
        <li style={{ listStyle: "none" }} key={link.name}>
          <a style={{ textDecoration: "none" }} href={link.link}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FooterNav;
